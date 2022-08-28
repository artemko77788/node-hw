const asyncHandler = require('express-async-handler')
const { Unauthorized } = require('http-errors')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const getUserByEmail = require('../../services/authService/getUserByEmail')
const loginService = require('../../services/authService/loginService')
const { SECRET_KEY } = process.env

const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body

  const user = await getUserByEmail(email)

  if (!user) {
    throw new Unauthorized('Email or password is wrong')
  }
  const passwordCompare = bcrypt.compareSync(password, user.password)
  if (!passwordCompare) {
    throw new Unauthorized('Email or password is wrong')
  }

  const payload = {
    id: user._id,
  }

  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '1h' })
  await loginService(user._id, token)
  res.json({
    status: 'success',
    code: 200,
    data: {
      token,
    },
  })
})

module.exports = login
