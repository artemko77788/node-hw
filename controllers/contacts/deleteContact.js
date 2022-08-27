const asyncHandler = require('express-async-handler')

const createErrors = require('http-errors')
const { contactsService } = require('../../services')
const deleteContact = asyncHandler(async (req, res, next) => {
  const { contactId } = req.params
  const result = await contactsService.deleteContact(contactId)

  if (!result) {
    throw createErrors(404, 'Not found')
  }
  res.json({
    status: 'succes',
    code: 200,
    message: 'contact deleted',
    data: {
      result,
    },
  })
})

module.exports = deleteContact
