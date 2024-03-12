const { HttpError } = require("../../helpers");
const { User } = require("../../models");

const verifyEmail = async (req, res, next) => {
  const { verificationToken } = req.params;
  const user = await User.findOne({ verificationToken });
  if (!user) {
    throw HttpError(404, "User not found");
  }
  await User.findByIdAndUpdate(user._id, {
    verify: true,
    verificationToken: "",
  });
  res.status(200).json({
    message:
      "Verification successful. Copy this link to your browser to visit SignIn Page: https://deadmakar.github.io/PowerPulseTeamPoject/signin/",
  });
};
//   res.status(200).json({ message: "Verification successful please push this link: <a href="https://deadmakar.github.io/PowerPulseTeamPoject/signin/">Sign in</a>" });
// };

module.exports = verifyEmail;
