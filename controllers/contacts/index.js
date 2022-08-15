const getAll = require('./getAll')
const getById = require('./getById')
const postContact = require('./postContact')
const deleteContact = require('./deleteContact')
const updateContacts = require('./updateContact')
const updateFavoriteContact = require('./updateFavoriteContact')

module.exports = {
  getAll,
  getById,
  postContact,
  deleteContact,
  updateContacts,
  updateFavoriteContact,
}
