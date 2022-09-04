const sgMail = require('@sendgrid/mail')
require('dotenv').config()

const { SENDGRID_API_KEY } = process.env

sgMail.setApiKey(SENDGRID_API_KEY)

const sendMail = async (email, verificationToken) => {
  const mail = {
    to: email,
    from: 'artemko77788@gmail.com',
    subject: 'confirmation email',
    html: `<a target = "_blank"  href='http://localhost:3000/api/users/verify/${verificationToken}'>Click to verify</a>`,
  }

  try {
    await sgMail.send(mail)
    return true
  } catch (error) {
    throw new Error(error)
  }
}

module.exports = sendMail
