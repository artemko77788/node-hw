const { User } = require('../../models')

const loginService = async (id, token) => {
  return await User.findByIdAndUpdate(id, { token })
}

module.exports = loginService
