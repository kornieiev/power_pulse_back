const { DiaryExercise } = require('../../models')

const deleteUserExercises = async (req, res) => {
	const { id } = req.params
	const result = await DiaryExercise.findByIdAndDelete(id)

	if (!result) {
		throw HttpError(404, 'Not found')
	}
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
