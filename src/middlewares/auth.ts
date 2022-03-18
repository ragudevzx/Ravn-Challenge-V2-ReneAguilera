const jwt = require('jsonwebtoken')

const auth = (req, res, next) => {
  try {
    // Validates id the token exist
    if (!req.headers.authorization) return res.status(400).json({ msg: 'No Token' })

    // Removing the word 'Bearer' from token
    const token = req.header('Authorization').replace('Bearer ', '')

    if (!token) return res.status(400).json({ msg: 'Invalid Authentication' })

    // Extracting data from token
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
      if (err) return res.status(400).json({ msg: 'Invalid Authentication' })

      req.user = user
      next()
    })
  } catch (err) {
    return res.status(500).json({ msg: err.message })
  }
}

export default auth
