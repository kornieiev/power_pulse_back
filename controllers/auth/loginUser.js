const { User } = require("../../models");
const { HttpError } = require("../../helpers");
const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");

const { JWT_SECRET } = process.env;

const loginUser = async (req, res, next) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user.verify) {
    throw HttpError(401, "Email is not verified");
  }

  if (!user) {
    throw HttpError(401, "Email or password is wrong");
  }

  const isValidPassword = await bcrypt.compare(password, user.password);

  if (!isValidPassword) {
    throw HttpError(401, "Email or password is wrong");
  }

  const token =
    // await
    jwt.sign({ id: user.id }, JWT_SECRET, {
      expiresIn: "1d",
    });

  await User.findByIdAndUpdate(user.id, { token }, { new: true });

  res.status(200).json({
    token,
    email,
    subscription: user.subscription,
  });
};

module.exports = loginUser;
