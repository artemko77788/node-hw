const { User } = require('../../models')

const signupService = async (email, password, avatarURL) => {
  return User.create({ email, password, avatarURL })
}

module.exports = signupService
