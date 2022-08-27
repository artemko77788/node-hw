const asyncHandler = require('express-async-handler')
const { contactsService } = require('../../services')

const getAll = asyncHandler(async (req, res, next) => {
  const { _id } = req.user
  const contacts = await contactsService.getAllContacts(_id)

  res.json({
    status: 'success',
    code: 200,
    data: { contacts },
  })
})

module.exports = getAll
