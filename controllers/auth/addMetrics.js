const BMR = require("../../helpers/BMR");
const { User } = require("../../models");

const addMetrics = async (req, res, next) => {
  const { email } = req.user;

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

  console.log("updatedUser", updatedUser);

  res.status(200).json({
    updatedUser: {
      email: updatedUser.email,
      verify: updatedUser.verify,
      userMetrics: updatedUser.userMetrics,
      name: updatedUser.name,
      createdAt: updatedUser.createdAt,
      updatedAt: updatedUser.updatedAt,
      birthday: updatedUser.birthday,
      blood: updatedUser.blood,
      currentWeight: updatedUser.currentWeight,
      desiredWeight: updatedUser.desiredWeight,
      height: updatedUser.height,
      levelActivity: updatedUser.levelActivity,
      resultBMR: updatedUser.resultBMR,
      sex: updatedUser.sex,
      userName: updatedUser.userName,
      age: updatedUser.age,
    },
  });
};

module.exports = addMetrics;
