const { HttpError } = require("../../helpers");
const { DiaryProduct } = require("../../models");

const deleteUserProducts = async (req, res) => {
  const { _id: owner } = req.user;
  const { id } = req.params;
  const { date } = req.body;

  const findProduct = await DiaryProduct.findOne({ owner, date });
  console.log("findProduct", findProduct);

  if (!findProduct) {
    throw HttpError(404, "Not found");
  }

  const index = findProduct.productArr.findIndex((product) => {
    const ind = product.productId === id;

    return ind;
  });

  const result = await DiaryProduct.findByIdAndUpdate(
    findProduct._id,
    {
      $inc: {
        consumedCalories: -findProduct.productArr[index].calories,
        totalProductWeight: -findProduct.productArr[index].amount,
      },
      $pull: { productArr: { productId: id } },
    },
    { new: true }
  );

  res.json(result);
};

module.exports = deleteUserProducts;
