const { User } = require('../../models')

const updateById = async (id, data) => {
  return await User.findByIdAndUpdate(id, data)
}

module.exports = updateById
