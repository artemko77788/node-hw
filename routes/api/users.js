// const express = require('express')
const { users: ctrl } = require('../../controllers')
const { auth } = require('../../middlewares')

const router = require('./auth')

router.get('/current', auth, ctrl.getCurrent)

module.exports = router
