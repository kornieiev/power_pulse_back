const { ProductsCategory } = require("../../models/productsCategory");
// const { controllerWrapper } = require("../../helpers");

const getProductsCategories = async (req, res) => {
  const result = await ProductsCategory.find();
  console.log(result);
  res.status(200).json(result);
};

module.exports = getProductsCategories;
