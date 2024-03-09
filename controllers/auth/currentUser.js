const { User } = require("../../models");

const currentUser = async (req, res, next) => {
  const { _id: owner, email } = req.user;

  const userInfo = await User.find({ email });

  const {
    _id,
    userEmail,
    userMetrics,
    height,
    avatarURL,
    blood,
    currentWeight,
    desiredWeight,
    levelActivity,
    resultBMR,
    sex,
    userName,
    birthday,
    age,
  } = userInfo[0];

  // console.log("avatarURL", avatarURL);

  const userData = {
    _id,
    userEmail,
    userMetrics,
    height,
    avatarURL,
    blood,
    currentWeight,
    desiredWeight,
    levelActivity,
    resultBMR,
    sex,
    userName,
    birthday,
    age,
  };

  res.status(200).json(userData);
};
module.exports = currentUser;
