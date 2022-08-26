const asyncHandler = require('express-async-handler')
const { User } = require('../../models')
const bcrypt = require('bcrypt')
const createErrors = require('http-errors')

const signup = asyncHandler(async (req, res) => {
  const { email, password } = req.body

  const user = await User.findOne({ email })
  if (user) {
    throw createErrors(409, `User with ${email} already exist`)
  }

  try {
    const hashPassord = bcrypt.hashSync(password, bcrypt.genSaltSync(10))

    const result = await User.create({ email, password: hashPassord })
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

module.exports = signup
