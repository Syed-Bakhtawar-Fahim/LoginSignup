const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');


const sendEmail = (options) => {
    const transporter = nodemailer.createTransport(
        smtpTransport(
            {
            service: process.env.EMAIL_SERVICE,
            host: process.env.EMAIL_HOST,
            auth: {
                user: process.env.EMAIL_USERNAME,
                pass: process.env.EMAIL_PASSWORD
            }
        })
    )

    const mailOptions = {
        from: process.env.EMAIL_FROM,
        to: options.to,
        subject: options.subject,
        html: options.text
    }

    transporter.sendMail(mailOptions, function (err, info) {
        if (err) {
            console.log("Error from SendMail ", err)
        }
        else {
            console.log("Info from sendMail ", info)
        }

    })
}

module.exports = sendEmail
