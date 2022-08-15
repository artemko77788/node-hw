const asyncHandler = require('express-async-handler')
const { Contact } = require('../../models')

const updateContact = asyncHandler(async (req, res, next) => {
  const { contactId } = req.params
  const result = await Contact.findByIdAndUpdate(contactId, req.body, {
    new: true,
  })

  res.json({
    status: 'success',
    code: 200,
    data: {
      result,
    },
  })
})

module.exports = updateContact
