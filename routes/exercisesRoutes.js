const express = require("express");

const {
  getExercisesFilters,
  getExercises,
  getExercisesByQuery,
} = require("../controllers/exercises");
const { authenticate } = require("../middlewares");

const exerciseRouters = express.Router();

// get  filters exercises
exerciseRouters.get("/filters", authenticate, getExercisesFilters);

// get  exercises
exerciseRouters.get("/", authenticate, getExercises);

// getExercisesByQuery
exerciseRouters.get("/query", authenticate, getExercisesByQuery);

module.exports = exerciseRouters;

// // category (bodyPart, muscles, equipment)
// // target ()
