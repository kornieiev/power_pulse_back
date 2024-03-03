const { DiaryExercise } = require('../../models')

const deleteUserExercises = async (req, res) => {
	const { _id: owner } = req.user
	const { id } = req.params
	const { date } = req.body

	const findExercise = await DiaryExercise.findOne({ owner, date })

	if (!findExercise) {
		throw HttpError(404, 'Not found')
	}

	const result = await DiaryExercise.findByIdAndUpdate(
		findExercise._id,
		{
			$inc: {
				burnedCalories: -findExercise.exerciseArr[0].calories,
				totalExerciseTime: -findExercise.exerciseArr[0].time,
			},
			$pull: { exerciseArr: { exerciseId: id } },
		},
		{ new: true }
	)

	res.json(result)
}

module.exports = deleteUserExercises

// $inc $pull

// data = await Diary.findByIdAndUpdate(
//       foundedDiary._id,
//       {
//         $inc: { burnedCalories: -doneExercise.calories, sportTime: -time },
//         $pull: { doneExercises: { _id: doneExerciseId } },
//       },
//       { new: true },
//     )
