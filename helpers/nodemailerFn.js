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

//

// const verifyEmail = {
//   to: email,
//   subject: "Verify your email",
//   html: (
//     <a target='_blank' href='${BASE_URL}/users/verify/${verificationToken}'>
//       Click verify email
//     </a>
//   ),
// };

// await sendEmail(verifyEmail);

// res.status(201).json({
//   email: newUser.email,
//   subscription: newUser.subscription,
// });
