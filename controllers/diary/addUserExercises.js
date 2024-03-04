const { DiaryExercise } = require('../../models')

const addUserExercises = async (req, res) => {
	const { _id: owner } = req.user

	const { date, calories, time, exerciseId } = req.body

	const findDate = await DiaryExercise.findOne({ owner, date })

	if (findDate) {
		const updateResults = await DiaryExercise.findByIdAndUpdate(
			findDate._id,
			{
				$inc: { burnedCalories: +calories, totalExerciseTime: +time },
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
		burnedCalories: calories,
		totalExerciseTime: time,

		exerciseArr: { exerciseId, calories, time },
	})

	res.status(201).json(newResult)
}

module.exports = addUserExercises
