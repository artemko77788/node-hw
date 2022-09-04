const { users: ctrl } = require('../../controllers')
const { ctrlWrapper } = require('../../helpers')
const { auth, upload } = require('../../middlewares')

const router = require('./auth')

router.get('/current', auth, ctrl.getCurrent)

router.patch('/avatars', auth, upload.single('avatar'), ctrl.updateAvatar)

router.get('/verify/:verificationToken', ctrlWrapper(ctrl.verifyEmail))

module.exports = router
