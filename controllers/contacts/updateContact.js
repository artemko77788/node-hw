const asyncHandler = require('express-async-handler')
const { contactsService } = require('../../services')
const createErrors = require('http-errors')

const updateContact = asyncHandler(async (req, res, next) => {
  const { contactId } = req.params
  const result = await contactsService.updateContact(contactId, req.body)
  if (!result) {
    throw createErrors(404, 'Not found')
  }
  res.json({
    status: 'success',
    code: 200,
    data: {
      result,
    },
  })
})

module.exports = updateContact
