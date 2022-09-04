const asyncHandler = require('express-async-handler')

const bcrypt = require('bcrypt')
const createErrors = require('http-errors')
const getUserByEmail = require('../../services/authService/getUserByEmail')
const signupService = require('../../services/authService/signupService')

const gravatar = require('gravatar')
const { v4 } = require('uuid')
const sendEmail = require('../../helpers/sendEmail')

const signup = asyncHandler(async (req, res) => {
  const { email, password } = req.body

  const user = await getUserByEmail(email)

  if (user) {
    throw createErrors(409, `User with ${email} already exist`)
  }

  try {
    const hashPassord = bcrypt.hashSync(password, bcrypt.genSaltSync(10))

    const avatarURL = gravatar.url(email)

    const verificationToken = v4()

    await sendEmail(email, verificationToken)

    const result = await signupService(
      email,
      hashPassord,
      avatarURL,
      verificationToken,
    )

    res.status(201).json({
      status: 'success',
      code: 201,

      RequestBody: {
        email: result.email,
        avatarURL: result.avatarURL,
        verificationToken: result.verificationToken,
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
