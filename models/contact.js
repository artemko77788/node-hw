const { Schema, model } = require('mongoose')
const Joi = require('joi')

const contasctSchema = Schema(
  {
    name: {
      type: String,
      required: [true, 'Set name for contact'],
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'user',
      required: true,
    },
  },
  { versionKey: false, timestamps: true },
)

const joiSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  phone: Joi.number().required(),
  favorite: Joi.bool(),
})

const favoriteJoiSchema = Joi.object({
  favorite: Joi.bool().required(),
})

const Contact = model('contact', contasctSchema)

module.exports = {
  Contact,
  joiSchema,
  favoriteJoiSchema,
}
