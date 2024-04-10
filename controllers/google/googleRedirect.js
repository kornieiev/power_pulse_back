const axios = require("axios");
const queryString = require("querystring");
const User = require("../../models");
const jwt = require("jsonwebtoken");
const sendEmail = require("../../helpers/sendEmail");
const bcrypt = require("bcryptjs");

const {
  GOOGLE_CLIENT_ID,
  BASE_URL,
  GOOGLE_CLIENT_SECRET,
  FRONTEND_URL,
  JWT_SECRET
} = process.env;

const googleRedirect = async (req, res) => {
  const fullUrl = `${req.protocol}://${req.get("host")}${req.originalUrl}`;
  const urlObj = new URL(fullUrl);
  const urlParams = queryString.parse(urlObj.search);
  const code = urlParams["?code"];

  console.log('GOOGLE WORK')

  const tokenData = await axios({
    url: `https://oauth2.googleapis.com/token`,
    method: "post",
    data: {
      client_id: GOOGLE_CLIENT_ID,
      client_secret: GOOGLE_CLIENT_SECRET,
      redirect_uri: `${BASE_URL}/auth/google-redirect`,
      grant_type: "authorization_code",
      code
    }
  });

  const userData = await axios({
    url: "https://www.googleapis.com/oauth2/v2/userinfo",
    method: "get",
    headers: {
      Authorization: `Bearer ${tokenData.data.access_token}`
    }
  });

  const UserEmail = userData.data.email;
  const UserName = userData.data.name;

  function generateRandomPassword(length) {
    const charset =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    return Array.from({ length }, () =>
      charset.charAt(Math.floor(Math.random() * charset.length))
    ).join("");
  }

  const user = await User.findOne({ UserEmail });

  console.log("user", user);
  console.log("UserEmail", UserEmail);
  console.log("UserName", UserName);


  if (user) {
    const token = jwt.sign({ id: user.id }, JWT_SECRET, {
      expiresIn: "1d"
    });

    await User.findByIdAndUpdate(user.id, { token }, { new: true });

    // res.status(200).json({
    // 	token,
    // 	email,
    // })

    return res.redirect(
      `${FRONTEND_URL}?email=${user.email}&accessToken=${token}`
    );
  }

  try {
    const randomPassword = generateRandomPassword(10);
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(randomPassword, salt);

    await User.create({
      userName: UserName,
      email: UserEmail,
      password: hashedPassword,
      userMetrics: false
    });

    const registeredUser = await User.findOne({ UserEmail });

    console.log("registeredUser", registeredUser);

    const token = jwt.sign({ id: registeredUser.id }, JWT_SECRET, {
      expiresIn: "1d"
    });

    const userId = await User.findByIdAndUpdate(
      registeredUser.id,
      {
        token,
        verify: true
      },
      { new: true }
    );

    sendEmail(UserEmail, UserName);

    return res.redirect(
      `${FRONTEND_URL}?email=${registeredUser.email}&accessToken=${token}`
    );
  } catch (error) {
    error = error.message;
    // if (error.message.includes('E11000') || error.message.code === 11000) {
    // 	throw HttpError(409, 'Email in use')
    // }
    throw error;
  }

  // return res.redirect(`${FRONTEND_URL}?email=${userData.data.email}`)
};

module.exports = googleRedirect;
