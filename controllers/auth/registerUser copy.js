const { User } = require("../../models");
const { HttpError } = require("../../helpers");
const bcrypt = require("bcryptjs");
// const { nanoid } = require("nanoid");
const sendEmail = require("../../helpers/sendEmail");
//
const jwt = require("jsonwebtoken");

const { JWT_SECRET } = process.env;

const registerUser = async (req, res, next) => {
  const { email, password, userName } = req.body;

  // const verificationCode = nanoid();

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  let result;

  try {
    result = await User.create({
      userName,
      email,
      // token,
      password: hashedPassword,
      userMetrics: false,
      // verificationToken: verificationCode,
    });

    // res.status(201).json({
    //   id: result._id,
    //   name,
    //   email,
    //   token,
    //   message: "Registration successful",
    //   // verificationToken: verificationCode,
    // });
  } catch (error) {
    if (error.message.includes("E11000") || error.message.code === 11000) {
      throw HttpError(409, "Email in use");
    }
    throw error;
  }

  // const user = await User.findOne({ email });

  const user = await User.findOne({ email });

  const token = jwt.sign({ id: user.id }, JWT_SECRET, {
    expiresIn: "1d",
  });

  const userId = await User.findByIdAndUpdate(
    user.id,
    { token },
    { new: true }
  );
  console.log("userId", userId);

  sendEmail(
    email
    // , verificationCode
  );

  res.status(201).json({
    id: result._id,
    userName,
    email,
    token,
    message: "Registration successful",
    // verificationToken: true,
    verify: true,
  });
};
module.exports = registerUser;
