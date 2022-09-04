const { User } = require('../../models')

const findVerifyEmail = async (verificationToken) => {
  return await User.findOne({ verificationToken })
}

module.exports = findVerifyEmail
