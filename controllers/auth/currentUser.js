const currentUser = async (req, res, next) => {
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
    createdAt,
  } = req.user;

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
    createdAt,
  };

  res.status(200).json(userData);
};
module.exports = currentUser;
