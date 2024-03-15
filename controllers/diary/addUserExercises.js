const { DiaryExercise } = require("../../models");

const addUserExercises = async (req, res) => {
  const { _id: owner } = req.user;

  const {
    date,
    calories,
    time,
    exerciseId,
    bodyPart,
    equipment,
    name,
    target,
  } = req.body;

  const findDate = await DiaryExercise.findOne({ owner, date });

  if (findDate) {
    const updateResults = await DiaryExercise.findByIdAndUpdate(
      findDate._id,
      {
        $inc: { burnedCalories: +calories, totalExerciseTime: +time },
        $push: {
          exerciseArr: {
            exerciseId,
            time,
            calories,
            bodyPart,
            equipment,
            name,
            target,
          },
        },
      },
      { new: true }
    );
    res.status(201).json(updateResults);
    return;
  }

  const newResult = await DiaryExercise.create({
    owner,
    date,
    bodyPart,
    equipment,
    name,
    target,
    burnedCalories: calories,
    totalExerciseTime: time,

    exerciseArr: {
      exerciseId,
      calories,
      time,
      bodyPart,
      equipment,
      name,
      target,
    },
  });

  res.status(201).json(newResult);
};

module.exports = addUserExercises;
