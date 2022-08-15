const asyncHandler = require('express-async-handler')
const { Contact } = require('../../models')

const updateFavoriteContact = asyncHandler(async (req, res, next) => {
  const { contactId } = req.params
  const { favorite } = req.body

  const result = await Contact.findByIdAndUpdate(
    contactId,
    { favorite },
    {
      new: true,
    },
  )

  res.json({
    status: 'success',
    code: 200,
    data: {
      result,
    },
  })
})

module.exports = updateFavoriteContact
