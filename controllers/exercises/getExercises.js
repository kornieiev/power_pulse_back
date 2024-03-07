const { Filter } = require('../../models')

const getExercises = async (req, res) => {
	const data = await Filter.find()
	console.log(data)
	res.status(200).json(data)
}

module.exports = getExercises
