const { DiaryExercise } = require("../../models");
const { DiaryProduct } = require("../../models");

const getCommonDataByDate = async (req, res) => {
  const { _id: owner } = req.user;

  console.log("owner", owner);

  const { date } = req.params;
  console.log("date", date);

  const findInfo = await DiaryProduct.find({ owner, date });

  console.log("findInfo", findInfo);

  res.status(200).json({ findInfo });
};

module.exports = getCommonDataByDate;
