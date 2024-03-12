const { HttpError } = require("../../helpers");
const { DiaryExercise } = require("../../models");
const { DiaryProduct } = require("../../models");

const getCommonDataByDate = async (req, res) => {
  const { _id: owner } = req.user;

  const { date } = req.params;

  const ExerciseInfo = await DiaryExercise.find({ owner, date });

  const ProductInfo = await DiaryProduct.find({ owner, date });

  const allData = [...ProductInfo, ...ExerciseInfo];

  //   if (allData.length < 1) {
  //     throw HttpError(404, "Information by your request not found");
  //   }

  res.status(200).json({ allData });
};

module.exports = getCommonDataByDate;
