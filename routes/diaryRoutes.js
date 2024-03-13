const express = require("express");
const diaryRouter = express.Router();

const { authenticate, isValidId } = require("../middlewares");
const {
  deleteUserExercises,
  addUserExercises,
  addUserProducts,
  deleteUserProducts,
  getProductsAndExercises,
} = require("../controllers/diary");
const { validateBody } = require("../helpers");

const {
  UserProductSchema,
  UserExercisesSchema,
} = require("../schemas/diarySchemas");

// add product
diaryRouter.post(
  "/products",
  authenticate,
  validateBody(UserProductSchema),
  addUserProducts
);

// add exercises
diaryRouter.post(
  "/exercises",
  authenticate,
  validateBody(UserExercisesSchema),
  addUserExercises
);

// get product and exercises
diaryRouter.get("/", authenticate, getProductsAndExercises);

// delete products
diaryRouter.delete(
  "/products/:id",
  authenticate,
  isValidId,
  deleteUserProducts
);

// delete exercises
diaryRouter.delete(
  "/exercises/:id",
  authenticate,
  isValidId,
  deleteUserExercises
);

module.exports = diaryRouter;
