const Jimp = require('jimp')

const photoResize = async (path) => {
  const image = await Jimp.read(path)

  image.resize(250, Jimp.AUTO).circle().write(path)
}

module.exports = photoResize
