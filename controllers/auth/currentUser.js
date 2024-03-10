const { User } = require("../../models");

const currentUser = async (req, res, next) => {
  const { _id: owner } = req.user;

  const userInfo = await User.findById(owner);

  const {
    _id,
    email,
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
  } = userInfo;

  const userData = {
    _id,
    email,
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
