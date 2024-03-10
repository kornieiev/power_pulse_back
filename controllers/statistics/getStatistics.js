const { User, DiaryExercise } = require('../../models')

const getStatistics = async (req, res) => {
	const totalUsers = await User.find()

	const allExercises = await DiaryExercise.find()

	const totalExercises = allExercises.reduce(
		(totalExercisesLength, exercises) =>
			totalExercisesLength + exercises.exerciseArr.length,
		0
	)
	const totalBurnedCalories = allExercises.reduce(
		(totalCalories, calories) => totalCalories + calories.burnedCalories,
		0
	)
	const totalTimeTrainings = allExercises.reduce(
		(totalTime, time) => totalTime + time.totalExerciseTime,
		0
	)
	const data = {
		totalUsers: totalUsers.length,
		totalExercises: totalExercises,
		totalBurnedCalories: totalBurnedCalories,
		totalTimeTrainings: Math.round(totalTimeTrainings / 60),
	}

	res.json(data)
}
module.exports = getStatistics
