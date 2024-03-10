const { User } = require("../../models");
const { HttpError, nodemailerFn } = require("../../helpers");
const bcrypt = require("bcryptjs");
const { nanoid } = require("nanoid");
const sendEmail = require("../../helpers/sendEmail");

const registerUser = async (req, res, next) => {
  const { email, password, name } = req.body;

  const verificationCode = nanoid();

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  try {
    const result = await User.create({
      name,
      email,
      password: hashedPassword,
      userMetrics: false,
      verificationToken: verificationCode,
    });

    sendEmail(email, verificationCode);

    res.status(201).json({
      id: result._id,
      name,
      email,
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
