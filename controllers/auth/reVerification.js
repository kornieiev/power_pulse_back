const { User } = require("../../models");
const { HttpError, nodemailerFn } = require("../../helpers");

const reVerification = async (req, res, next) => {
  const { email } = req.body;

  const user = await User.findOne({ email });
  console.log("user in reVerification:", user);

  if (!user) {
    throw HttpError(400, "missing required field email");
  }
  if (user.verify) {
    throw HttpError(400, "Verification has already been passed");
  }

  try {
    nodemailerFn(user.verificationToken, email);

    res.status(200).json({
      message: "Verification email sent",
      // email,
      // [user.verificationToken]: [user.verificationToken],
    });
  } catch (error) {
    if (error.message.includes("E11000") || error.message.code === 11000) {
      // 11000 - помилка mongoDB яка говорить про наявність дублікату даних у БД
      throw HttpError(409, "Email in use");
    }
    throw error;
  }
};

module.exports = reVerification;
