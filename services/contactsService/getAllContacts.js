const { Contact } = require('../../models')

const getAllContacts = async (owner) => {
  return await Contact.find({ owner }).populate('owner', '_id email')
}

module.exports = getAllContacts
