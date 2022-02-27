const nodemailer = require('nodemailer');

const emailUser = process.env.EMAILACCOUNT;
const authPassword = process.env.EMAILPASSWORD;
const emaildestinatary = process.env.EMAILDESTINATARY;


async function sendMail(theme, message) {

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    secure: true, // true for 465, false for other ports
    port: 465,
    auth: {
      user: emailUser,
      pass: authPassword
    }
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: emailUser, // sender address
    to: emaildestinatary, // list of receivers
    subject: theme, // Subject line
    text: message, // plain text body
  });
/*
  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...*/
}

module.exports = { sendMail };
