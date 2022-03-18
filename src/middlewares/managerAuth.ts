const managerAuth = async (req, res, next) => {
  try {
    // Validate manager's role
    if (req.user.role != 'manager') {
      return res.status(400).json({ msg: 'Manager resources access denied' })
    }

    next()
  } catch (err) {
    return res.status(500).json({ msg: err.message })
  }
}

export default managerAuth
