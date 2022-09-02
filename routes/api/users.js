const { users: ctrl } = require('../../controllers')
const { auth, upload } = require('../../middlewares')

const router = require('./auth')

router.get('/current', auth, ctrl.getCurrent)

router.patch('/avatars', auth, upload.single('avatar'), ctrl.updateAvatar)

module.exports = router
