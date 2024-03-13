const { controllerWrapper } = require("../../helpers");

const addUserProducts = require("./addUserProducts");
const addUserExercises = require("./addUserExercises");
const getProductsAndExercises = require("./getProductsAndExercises");
const deleteUserProducts = require("./deleteUserProducts");
const deleteUserExercises = require("./deleteUserExercises");

module.exports = {
  addUserProducts: controllerWrapper(addUserProducts),
  addUserExercises: controllerWrapper(addUserExercises),
  getProductsAndExercises: controllerWrapper(getProductsAndExercises),
  deleteUserProducts: controllerWrapper(deleteUserProducts),
  deleteUserExercises: controllerWrapper(deleteUserExercises),
};
