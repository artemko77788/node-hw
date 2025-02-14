const express = require('express')

const router = express.Router()
const { joiSchema, favoriteJoiSchema } = require('../../models/contact')
const { validation, auth } = require('../../middlewares')
const { contacts: ctrl } = require('../../controllers')

router.get('/', auth, ctrl.getAll)

router.get('/:contactId', ctrl.getById)

router.post('/', auth, validation(joiSchema), ctrl.postContact)

router.delete('/:contactId', ctrl.deleteContact)

router.put('/:contactId', validation(joiSchema), ctrl.updateContacts)

router.patch(
  '/:contactId/favorite',
  validation(favoriteJoiSchema),
  ctrl.updateStatusContact,
)

module.exports = router
