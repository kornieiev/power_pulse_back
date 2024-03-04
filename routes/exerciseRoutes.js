const express = require("express");

// const { authenticate } = require("../../middlewares");
const { getExerciseCategories } = require("../controllers/exercises");
const { schemas } = require("../models/ExerciseCategory");

const exerciseRouters = express.Router();

exerciseRouters.get("/all", getExerciseCategories);

module.exports = exerciseRouters;
