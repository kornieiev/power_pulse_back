const { User } = require("../../models");
const { HttpError } = require("../../helpers");
const sendEmail = require("../../helpers/sendEmail");

const reVerification = async (req, res, next) => {
  const { email } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    throw HttpError(400, "missing required field email");
  }
  if (user.verify) {
    throw HttpError(400, "Verification has already been passed");
  }

  try {
    sendEmail(email, user.verificationToken);

    res.status(200).json({
      message: "Verification email sent",
    });
  } catch (error) {
    if (error.message.includes("E11000") || error.message.code === 11000) {
      throw HttpError(409, "Email in use");
    }
    throw error;
  }
};

module.exports = reVerification;
