const { controllerWrapper } = require("../../helpers");

const getExerciseCategories = require("./getExerciseCategories");
// const getExerciseFilter = require("./getExerciseFilter");

module.exports = {
  getExerciseCategories: controllerWrapper(getExerciseCategories),
  // getExerciseFilter: controllerWrapper(getExerciseFilter),
};
