const asyncHandler = require('express-async-handler')
const createErrors = require('http-errors')

const { contactsService } = require('../../services')

const postContact = asyncHandler(async (req, res, next) => {
  const { id } = req.user
  const body = req.body
  const contact = await contactsService.postContact(body, id)
  if (!contact) throw createErrors(400, 'Bad Request')

  res.status(201).json({
    status: 'success',
    code: 201,
    data: { contact },
  })
})

module.exports = postContact
