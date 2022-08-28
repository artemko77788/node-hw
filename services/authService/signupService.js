const { User } = require('../../models')

const signupService = async (email, password) => {
  return User.create({ email, password })
}

module.exports = signupService
