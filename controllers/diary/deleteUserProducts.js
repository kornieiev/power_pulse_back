const { HttpError } = require('../../helpers')
const { DiaryProduct } = require('../../models')

const deleteUserProducts = async (req, res) => {

  const { _id: owner } = req.user;
  const { id } = req.params;
  const { date } = req.body;

  const findProduct = await DiaryProduct.findOne({ owner, date });

  if (!findProduct) {
    throw HttpError(404, "Not found");
  }

  const index = findProduct.productArr.findIndex((product) => {
    const ind = product._id.toString() === id;
    return ind;
  });
  console.log("index", index);

  const result = await DiaryProduct.findByIdAndUpdate(
    findProduct._id,
    {
      $inc: {
        consumedCalories: -findProduct.productArr[index].calories,
        totalProductWeight: -findProduct.productArr[index].amount,
      },
      // $pull: { productArr: { productId: id } },
      $pull: { productArr: findProduct.productArr[index] },
    },
    { new: true }
  );

  res.status(200).json("Product Deleted");
};

module.exports = deleteUserProducts;

