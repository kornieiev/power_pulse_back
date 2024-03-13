const nodemailer = require("nodemailer");
const emailContentMaker = require("./emailContentMaker");

const { EMAIL_SENDER_1, MAIL_PASSWORD_1 } = process.env;

const config = {
  host: "smtp.meta.ua",
  port: 465,
  secure: true,
  auth: {
    user: EMAIL_SENDER_1,
    pass: MAIL_PASSWORD_1,
  },
};

const nodemailerFn = (verificationCode, email) => {
  const transporter = nodemailer.createTransport(config);

  const emailOptions = {
    from: EMAIL_SENDER_1,
    to: email,
    subject: "test",
    html: emailContentMaker(verificationCode),
  };

  transporter
    .sendMail(emailOptions)
    .then((info) => console.log(info))
    .catch((err) => console.log(err));
};

module.exports = nodemailerFn;
