
const { Exercise } = require("../../models/ExerciseCategory");

const endpoints = require("./endpoints");

const getExerciseFiltered = async (req, res) => {
  const { filter, name, page, limit } = req.query;
  const findFilter = {};
  let result = [];
  let total = 0;

  const category = Object.keys(endpoints).find(
    (endpoint) => endpoints[endpoint].filter === filter
  );
  if (category) {
    findFilter[endpoints[category].field] = name;
  }
  res.json({ data: result, total });
};

module.exports = getExerciseFiltered;
