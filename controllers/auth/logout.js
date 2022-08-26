const { User } = require('../../models')
const asyncHandler = require('express-async-handler')
const logout = asyncHandler(async (req, res) => {
  const { _id } = req.user

  await User.findByIdAndUpdate(_id, { token: null })
  res.status(204).json()
})

module.exports = logout
