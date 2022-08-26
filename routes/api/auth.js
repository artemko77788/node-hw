const express = require('express')

const { validation, auth } = require('../../middlewares')
const { auth: ctrl } = require('../../controllers')
const { joiRegisterSchema, joiLoginSchema } = require('../../models/user')

const router = express.Router()

router.post('/signup', validation(joiRegisterSchema), ctrl.signup)
router.post('/login', validation(joiLoginSchema), ctrl.login)
router.post('/logout', auth, ctrl.logout)

module.exports = router
