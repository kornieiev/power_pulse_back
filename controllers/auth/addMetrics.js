const BMR = require("../../helpers/BMR");
const { Metric } = require("../../models");
const { User } = require("../../models");

const addMetrics = async (req, res, next) => {
  const { _id: owner, email } = req.user;
  console.log("===>>>owner", owner);

  const {
    height,
    currentWeight,
    desiredWeight,
    blood,
    sex,
    levelActivity,
    age,
    userName,
    birthday,
  } = req.body;

  const resultBMR = BMR(height, currentWeight, levelActivity, age, sex);
  console.log("resultBMR", resultBMR);

  // const userData = await User.findById(owner);
  // console.log("userData", userData);

  const updatedUser = await User.findOneAndUpdate(
    { email },
    {
      // ...userData,
      $set: {
        height,
        currentWeight,
        desiredWeight,
        blood,
        sex,
        levelActivity,
        age,
        userName,
        birthday,
        resultBMR,
        userMetrics: true,
      },
    },
    {
      new: true,
    }
  );

  res.status(200).json({ updatedUser });
};

module.exports = addMetrics;
