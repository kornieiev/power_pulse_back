const { HttpError } = require("../../helpers");
const { Exercise } = require("../../models");

const getExercises = async (req, res) => {
  const { bodyPart, equipment, target, page = 1, limit = 10 } = req.query;

  const skip = (page - 1) * limit;

  const query = {};
  bodyPart && (query.bodyPart = bodyPart);
  equipment && (query.equipment = equipment);
  target && (query.target = target);

  const data = await Exercise.find(query, "", { skip, limit });

  if (data.length < 1) {
    throw HttpError(404, "collections not found");
  }

  res.status(200).json(data);
};

module.exports = getExercises;
