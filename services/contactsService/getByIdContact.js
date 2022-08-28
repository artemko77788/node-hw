const { Contact } = require('../../models')

const getByIdContact = async (id) => {
  return await Contact.findById(id)
}

module.exports = getByIdContact
