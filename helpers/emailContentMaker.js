require("dotenv").config();
const { BASE_URL } = process.env;

const emailContentMaker = (verificationCode) => {
  console.log(">>>>>>>>>> Срабатывание emailContentMaker");
  return `
  <div style="background-color: #f0f0f0; color: #333; padding: 20px; font-family: Arial, sans-serif;">
    <a target='_blank' href='${BASE_URL}/users/verify/${verificationCode}'>
      Click verify email</a>
    <p style="font-size: 16px; margin-bottom: 10px;">Your verificationToken: ${verificationCode}</p>
    <p>Copy it and use in Postman, until we didn't create another method)</p>
    <p style="font-size: 20px; color: red;">Александр Макаров получает копии письма при регистрации каждого нового пользователя!</p>
    <p style="font-size: 24px; color: red;">Радости Саши нет предела))))</p>
    </div>
    `;
};

module.exports = emailContentMaker;
