const asyncHandler = require('express-async-handler')
const { User } = require('../../models')

const signUp = asyncHandler(async (req, res) => {
  const { email, password } = req.body

  // const user = await User.findOne({ email })
  // if (user) {
  //   throw createErrors(409, `User with ${email} already exist`)
  // }

  try {
    const result = await User.create({ email, password })
    res.status(201).json({
      status: 'success',
      code: 201,

      RequestBody: {
        email,
      },
    })
  } catch (error) {
    res.status(409).json({
      status: 'Conflict',
      code: 409,

      RequestBody: {
        email: 'Email in use',
      },
    })
  }
})

module.exports = signUp
