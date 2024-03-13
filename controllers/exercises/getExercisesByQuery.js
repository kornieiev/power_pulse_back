const { HttpError } = require("../../helpers");
const { Exercise } = require("../../models");

const getExercisesByQuery = async (req, res) => {
  const { exercise } = req.query;

  const exercises = await Exercise.find();

  const data = exercises.filter((item) => {
    return (
      item.bodyPart === exercise ||
      item.target === exercise ||
      item.equipment === exercise
    );
  });

  if (!data || data.length === 0) {
    res.status(404).json("Data by your request not found in DB");
    throw HttpError(404);
  }

  res.status(200).json(data);
};

module.exports = getExercisesByQuery;
