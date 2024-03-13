const { HttpError } = require("../../helpers");
const { DiaryExercise } = require("../../models");

const deleteUserExercises = async (req, res) => {
  const { _id: owner } = req.user;
  const { id } = req.params;
  const { date } = req.query;

  const findExercise = await DiaryExercise.findOne({ owner, date });

  if (!findExercise) {
    throw HttpError(404, "Not found");
  }

  const index = findExercise.exerciseArr.findIndex((product) => {
    const ind = product._id.toString() === id.toString();
    return ind;
  });

  const result = await DiaryExercise.findByIdAndUpdate(
    findExercise._id,
    {
      $inc: {
        burnedCalories: -findExercise.exerciseArr[index].calories,
        totalExerciseTime: -findExercise.exerciseArr[index].time,
      },
      $pull: { exerciseArr: { _id: id } },
    },
    { new: true }
  );

  res.json(result);
};

module.exports = deleteUserExercises;
