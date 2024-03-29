const moment = require("moment");

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
    userName,
    birthday,
  } = req.body;

  //
  const mathFullYear = (birthday) => {
    const [day, month, year] = birthday.split(".");
    const birthDate = new Date(year, month - 1, day);
    const currentDate = new Date();
    const age = currentDate.getFullYear() - birthDate.getFullYear();
    return age;
  };

  const birthDate = moment(birthday, "DD.MM.YYYY").toDate();

  const age = mathFullYear(birthday);

  const resultBMR = BMR(height, currentWeight, levelActivity, age, sex);

  const updatedUser = await User.findOneAndUpdate(
    { email },
    {
      $set: {
        height,
        currentWeight,
        desiredWeight,
        blood,
        sex,
        levelActivity,
        birthday: birthDate,
        userName,
        age,
        resultBMR,
        userMetrics: true,
      },
    },
    {
      new: true,
    }
  );

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
