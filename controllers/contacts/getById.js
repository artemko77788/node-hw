const asyncHandler = require('express-async-handler')
const createErrors = require('http-errors')
const { Contact } = require('../../models')

const getContactById = asyncHandler(async (req, res, next) => {
  const { contactId } = req.params

  const result = await Contact.findById(contactId)

  if (!result) {
    throw createErrors(404, `No such contact `)
  }

  res.json({
    status: 'success',
    code: 200,
    data: { result },
  })
})

module.exports = getContactById
