const { Filter } = require("../../models");

const getExercisesFilters = async (req, res) => {
  // const { filter, page = 1, limit = 10 } = req.query
  const { filter } = req.query;

  // const skip = (page - 1) * limit

  // const data = await Filter.find({ filter }, '', { skip, limit })
  const data = await Filter.find({ filter });

  res.status(200).json(data);
};

module.exports = getExercisesFilters;
