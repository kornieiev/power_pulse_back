const { DiaryExercise } = require('../../models')

const addUserExercises = async (req, res) => {
	const { _id: owner } = req.user

	const { date, calories, time, exerciseId } = req.body

	const findDate = await DiaryExercise.findOne({ owner, date })

	if (findDate) {
		const updateResults = await DiaryExercise.findByIdAndUpdate(
			findDate._id,
			{
				$inc: { consumedCalories: +calories, totalExerciseTime: +time },
				$push: { exerciseArr: { exerciseId, time, calories } },
			},
			{ new: true }
		)
		res.status(201).json(updateResults)
		return
	}

	const newResult = await DiaryExercise.create({
		owner,
		date,
		exerciseId,
		consumedCalories: calories,
		totalExerciseTime: time,

		exerciseArr: [{ exerciseId, time, calories }],
	})

	res.status(201).json(newResult)
}

module.exports = addUserExercises

// $inc $push

// data = await Diary.findByIdAndUpdate(
// 	foundedDiary._id,
// 	{
// 		$inc: { burnedCalories: +calories, sportTime: +time },
// 		$push: { doneExercises: { exercise, time, calories } },
// 	},
// 	{ new: true }
// )
