require("dotenv").config();

const emailContentMaker = (verificationCode) => {
  return `
  <div style="background-color: #f0f0f0; color: #333; padding: 20px; font-family: Arial, sans-serif;">
    <p style="font-size: 16px; margin-bottom: 10px;">Hello my dear user!</p>
    <a target='_blank' href='https://deadmakar.github.io/PowerPulseTeamPoject/signin'>
      Click here to verify your email</a>
    </div>
    `;
};

module.exports = emailContentMaker;
