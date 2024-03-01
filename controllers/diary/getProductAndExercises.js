// const Diary = require('../../models/diary')

const getProductAndExercises = async (req, res) => {
	const result = await Diary.find()
	res.json(result)
}

module.exports = getProductAndExercises
