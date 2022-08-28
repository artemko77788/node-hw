const asyncHandler = require('express-async-handler')

const getCurrent = asyncHandler(async (req, res) => {
  const { email } = req.user
  res.json({
    stars: 'success',
    code: 200,
    data: {
      user: {
        email,
      },
    },
  })
})

module.exports = getCurrent
