const { Contact } = require('../../models')

const deleteContact = async (id) => {
  return await Contact.findByIdAndDelete(id)
}

module.exports = deleteContact
