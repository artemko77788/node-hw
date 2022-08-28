const { Contact } = require('../../models')

const postContact = async (body, id) => {
  const { email } = body
  const contact = await Contact.findOne({ email })
  if (contact) return null

  const newContact = await Contact.create({ ...body, owner: id })
  return newContact
}

module.exports = postContact
