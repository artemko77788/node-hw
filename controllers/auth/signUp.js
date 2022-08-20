const asyncHandler = require('express-async-handler')
const {User} =require('../../models')
const reateErrors = require('http-errors')

const signUp = asyncHandler(async (req, res) => {
    const {name, email, password}= req.body
})

module.exports = signUp
