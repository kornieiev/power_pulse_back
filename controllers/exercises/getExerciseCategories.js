
const createError = require("http-errors"); 

const endpoints = require("./endpoints");
const Exercise = require("../../models/ExerciseCategory");

const getExerciseCategories = async (req, res, next) => { 

  const result = await Exercise.find({});
console.log(result)
  res.json(result);
};

module.exports = getExerciseCategories;