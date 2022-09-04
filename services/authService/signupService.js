const { User } = require('../../models')

const signupService = async (email, password, avatarURL, verificationToken) => {
  return User.create({ email, password, avatarURL, verificationToken })
}

module.exports = signupService
