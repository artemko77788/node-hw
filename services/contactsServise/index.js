const getAllContacts = require('./getAllContacts')
const getByIdContact = require('./getByIdContact')
const postContact = require('./postContact')
const updateContact = require('./updateContact')
const updateContactStatus = require('./updateContactStatus')
const deleteContact = require('./deleteContact')

module.exports = {
  getAllContacts,
  getByIdContact,
  postContact,
  updateContact,
  updateContactStatus,
  deleteContact,
}
