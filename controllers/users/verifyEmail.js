const { NotFound } = require('http-errors')
const updateContact = require('../../services/contactsService/updateContact')
const { findVerifyEmail } = require('../../services/authService')

const verifyEmail = async (req, res) => {
  const { verificationToken } = req.params
  const user = await findVerifyEmail(verificationToken)

  if (!user) {
    throw NotFound()
  }
  await updateContact(user._id, { verify: true, verificationToken: null })

  res.json({
    message: 'Verify success',
  })
}
module.exports = verifyEmail
