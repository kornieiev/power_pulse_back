const { DiaryExercise } = require("../../models");
const { DiaryProduct } = require("../../models");

const getCommonDataByDate = async (req, res) => {
  const { _id: owner } = req.user;

  const { date } = req.params;

  const ExerciseInfo = await DiaryExercise.find({ owner, date });

  const ProductInfo = await DiaryProduct.find({ owner, date });

  const allData = [...ProductInfo, ...ExerciseInfo];

  res.status(200).json({ allData });
};

module.exports = getCommonDataByDate;
