const asyncHandler = require('express-async-handler')
const { Contact } = require('../../models')

const postContact = asyncHandler(async (req, res, next) => {
  const { _id } = req.user
  const result = await Contact.create({ ...req.body, owner: _id })
  res.status(201).json({
    status: 'success',
    code: 201,
    data: { result },
  })
})

module.exports = postContact
