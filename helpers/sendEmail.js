const sgMail = require("@sendgrid/mail");
const emailContentMaker = require("./emailContentMaker");
require("dotenv").config();

const { SENDGRID_API_KEY } = process.env;

sgMail.setApiKey(SENDGRID_API_KEY);

function sendEmail(email, userName) {
  const msg = {
    to: email,
    from: "ssapientiaa@outlook.com",
    subject: "Verify your email",
    html: emailContentMaker(email, userName),
  };

  sgMail
    .send(msg)
    .then(() => {
      console.log("Email sent");
    })
    .catch((error) => {
      console.error(error);
    });
}

module.exports = sendEmail;
