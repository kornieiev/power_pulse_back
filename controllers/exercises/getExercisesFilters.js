const { Filter } = require('../../models')

const getExercisesFilters = async (req, res) => {
	const data = await Filter.find()

	res.status(200).json(data)
}

module.exports = getExercisesFilters
