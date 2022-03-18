import userModel from '../models/user'
import token from '../util/token'
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const userController = {
  register: async (req, res) => {
    try {
      if (!req.body) return res.status(400).json({ msg: 'No data' })
      const { firstName, lastName, email, password, role } = req.body

      const user = await userModel.findOne({
        where: {
          email: email,
        },
      })
      if (user) return res.status(400).json({ msg: 'The email already exists.' })

      const passwordHash = await bcrypt.hash(password, 10)
      const newUser = new userModel({
        firstName,
        lastName,
        email,
        password: passwordHash,
        role,
      })

      await newUser.save()

      const accesstoken = token.createAccessToken({
        role: role,
        email: email,
      })
      const refreshtoken = token.createRefreshToken({
        role: role,
        email: email,
      })

      res.cookie('refreshtoken', refreshtoken, {
        httpOnly: true,
        path: '/v1/user/refresh_token',
        maxAge: 7 * 24 * 60 * 60 * 1000,
      })

      res.json({ accesstoken })
    } catch (err) {
      return res.status(500).json({ msg: err.message })
    }
  },

  login: async (req, res) => {
    try {
      const { email, password } = req.body

      const user = await userModel.findOne({
        where: {
          email: email,
        },
      })
      if (!user) return res.status(400).json({ msg: 'User does not exist.' })

      const isMatch = await bcrypt.compare(password, user.password)
      if (!isMatch) return res.status(400).json({ msg: 'Incorrect password.' })

      const accesstoken = token.createAccessToken({
        id: user.id,
        role: user.role,
        email: user.email,
      })
      const refreshtoken = token.createRefreshToken({
        id: user.id,
        role: user.role,
        email: user.email,
      })

      res.cookie('refreshtoken', refreshtoken, {
        httpOnly: true,
        path: '/v1//user/refresh_token',
        maxAge: 7 * 24 * 60 * 60 * 1000,
      })

      res.json({ accesstoken })
    } catch (err) {
      return res.status(500).json({ msg: err.message })
    }
  },

  logout: async (req, res) => {
    try {
      res.clearCookie('refreshtoken', { path: '/v1/user/refresh_token' })
      return res.json({ msg: 'User Logged out' })
    } catch (err) {
      return res.status(500).json({ msg: err.message })
    }
  },

  refreshToken: (req, res) => {
    try {
      const token = req.cookies.refreshtoken
      if (!token) return res.status(400).json({ msg: 'Please Login or Register' })

      jwt.verify(token, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
        if (err) return res.status(400).json({ msg: 'Please Login or Register' })

        const accesstoken = token.createAccessToken({
          id: user.id,
          role: user.role,
          email: user.email,
        })

        res.json({ accesstoken })
      })
    } catch (err) {
      return res.status(500).json({ msg: err.message })
    }
  },
}

export default userController
