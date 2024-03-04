const express = require("express");

// const { authenticate } = require("../../middlewares");
const { getProductsCategories } = require("../controllers/products");

const nutritionsRouter = express.Router();


nutritionsRouter.get("/categories", getProductsCategories );

module.exports = nutritionsRouter;


 