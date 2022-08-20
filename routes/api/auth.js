const express = require('express')

const { validation } = require('../../middlewares/validation')
const { auth: ctrl } = require('../../controllers')
const { joiRegisterSchema, joiLoginSchema } = require('../../models/user')

const router = express.Router()

router.post('/signup', validation(joiRegisterSchema), ctrl.signUp)

module.exports = router
