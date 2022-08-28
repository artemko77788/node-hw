const asyncHandler = require('express-async-handler')
const { loginService } = require('../../services/authService')

const logout = asyncHandler(async (req, res) => {
  const { _id } = req.user

  await loginService(_id, null)
  res.status(204).json()
})

module.exports = logout
