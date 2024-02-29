const { User } = require("../../models");
const { HttpError, nodemailerFn } = require("../../helpers");
const bcrypt = require("bcryptjs");
const gravatar = require("gravatar");
const { nanoid } = require("nanoid");

const registerUser = async (req, res, next) => {
  const { email, password } = req.body;

  const verificationCode = nanoid();

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  const avatarURL = gravatar.url(email);

  try {
    const result = await User.create({
      // ...req.body,
      email,
      password: hashedPassword,
      subscription: "starter",
      avatarURL,
      verificationToken: verificationCode,
    });

    // nodemailerFn(verificationCode, email);

    res.status(201).json({
      id: result._id,
      email,
      subscription: "starter",
      avatarURL,
      verificationToken: verificationCode,
    });
  } catch (error) {
    if (error.message.includes("E11000") || error.message.code === 11000) {
      // 11000 - помилка mongoDB яка говорить про наявність дублікату даних у БД
      throw HttpError(409, "Email in use");
    }
    throw error;
  }
};
module.exports = registerUser;
