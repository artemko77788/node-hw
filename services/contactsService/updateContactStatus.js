const { Contact } = require('../../models')

const updateContactStatus = async (id, favorite) => {
  return await Contact.findByIdAndUpdate(
    id,
    { favorite },
    {
      new: true,
    },
  )
}

module.exports = updateContactStatus
