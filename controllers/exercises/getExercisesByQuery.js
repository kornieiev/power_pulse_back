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

  res.status(200).json(data);
};

module.exports = getExercisesByQuery;
