const asyncHandler = require('express-async-handler')
const { Contact } = require('../../models')

const postContact = asyncHandler(async (req, res, next) => {
  const result = await Contact.create(req.body)
  res.status(201).json({
    status: 'success',
    code: 201,
    data: { result },
  })
})

module.exports = postContact
