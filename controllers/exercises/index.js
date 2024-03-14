const { controllerWrapper } = require("../../helpers");

const getExercisesFilters = require("./getExercisesFilters");
const getExercises = require("./getExercises");
const getExercisesByQuery = require("./getExercisesByQuery");

module.exports = {
  getExercisesFilters: controllerWrapper(getExercisesFilters),
  getExercises: controllerWrapper(getExercises),
  getExercisesByQuery: controllerWrapper(getExercisesByQuery),
};
