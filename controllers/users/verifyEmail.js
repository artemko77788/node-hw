const { NotFound } = require('http-errors')

const { authService } = require('../../services')
const verifyEmail = async (req, res) => {
  const { verificationToken } = req.params
  const user = await authService.findVerifyEmail(verificationToken)

  if (!user) {
    throw NotFound()
  }
  await authService.updateById(user._id, {
    verify: true,
    verificationToken: null,
  })

  res.status(200).json({
    message: 'Verification successful',
  })
}
module.exports = verifyEmail
