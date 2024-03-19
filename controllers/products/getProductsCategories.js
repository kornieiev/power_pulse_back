const path = require("path");
const fs = require("fs/promises");

const categoriesPath = path.join(
  __dirname,
  // "../../resources/productsCategories.json"
  "../../resources/productsCatLink.json"
);

const getProductsCategories = async (req, res) => {
  const categories = await fs.readFile(categoriesPath);

  const data = JSON.parse(categories);

  res.status(200).json(data);
};

module.exports = getProductsCategories;
