const asyncHandler = require('express-async-handler')
const { contactsService } = require('../../services')
const createErrors = require('http-errors')
const updateStatusContact = asyncHandler(async (req, res, next) => {
  const { contactId } = req.params
  const { favorite } = req.body

  const result = await contactsService.updateContactStatus(contactId, favorite)
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

module.exports = updateStatusContact
