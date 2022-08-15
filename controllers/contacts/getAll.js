const asyncHandler = require('express-async-handler')
const { Contact } = require('../../models')

const getAll = asyncHandler(async (req, res, next) => {
  const contacts = await Contact.find({})

  res.json({
    status: 'success',
    code: 200,
    data: { contacts },
  })
})

module.exports = getAll
