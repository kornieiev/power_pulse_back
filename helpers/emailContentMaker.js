// require("dotenv").config();
// const { BASE_URL } = process.env;

const emailContentMaker = (email, userName) => {
  console.log(">>>>>>>>>> emailContentMaker working...");
  return `
  <div style="background-color: #f0f0f0; color: #333; padding: 20px; font-family: Arial, sans-serif;">
    <p style="font-size: 16px; margin-bottom: 10px;">Dear ${userName}</p>
    <p>We are glad that you have chosen our service as a tool to reduce the amount of fat in your body 🐖</p>
    <p>Have a good day and work harder!</p>
  </div>
    `;
};

module.exports = emailContentMaker;
