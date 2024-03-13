// const { Filter } = require("../../models");

// const getExercisesFilters = async (req, res) => {
//   // const { filter, page = 1, limit = 10 } = req.query
//   const { filter } = req.query;

//   // const skip = (page - 1) * limit

//   // const data = await Filter.find({ filter }, '', { skip, limit })
//   const data = await Filter.find({ filter });

//   if (!data || data.length === 0) {
//     res.status(404).json("Data by your request not found in DB");
//     throw HttpError(404);
//   }

//   res.status(200).json(data);
// };

// module.exports = getExercisesFilters;
