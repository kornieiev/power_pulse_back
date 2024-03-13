const { HttpError } = require("../../helpers");
const { DiaryExercise } = require("../../models");
const { DiaryProduct } = require("../../models");

const getProductsAndExercises = async (req, res) => {
  const { _id: owner } = req.user;

  const { date } = req.query;

  const [products, exercises] = await Promise.all([
    DiaryProduct.find({ owner, date }).populate(
      "productArr.productId",
      "title category groupBloodNotAllowed"
    ),
    DiaryExercise.find({ owner, date }).populate(
      "exerciseArr.exerciseId",
      "bodyPart equipment"
    ),
  ]);

  const data = [...products, ...exercises];

  if (data.length < 1) {
    throw HttpError(404, "Information by your request not found");
  }

  res.status(200).json(data);
};

module.exports = getProductsAndExercises;
