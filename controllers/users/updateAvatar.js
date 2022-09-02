const asyncHandler = require('express-async-handler')
const path = require('path')
const fs = require('fs/promises')
const { updateById } = require('../../services/authService')

const { photoResize } = require('../../helpers')

const avatarDir = path.join(__dirname, '../../', 'public', 'avatars')

const updateAvatar = asyncHandler(async (req, res) => {
  const { path: tempUpload, originalname } = req.file
  const { _id: id } = req.user

  const [extention] = originalname.split('.').reverse()

  const imageName = `${id}.${extention}`

  try {
    await photoResize(tempUpload)

    const resultUpload = path.join(avatarDir, imageName)

    await fs.rename(tempUpload, resultUpload)

    const avatarURL = path.join('public', 'avatars', imageName)
    await updateById(req.user._id, { avatarURL })

    res.json({
      avatarURL,
    })
  } catch (error) {
    await fs.unlink(tempUpload)
    throw error
  }
})

module.exports = updateAvatar
