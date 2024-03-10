const { Filter } = require('../../models')

const getExercisesFilters = async (req, res) => {
	const { page = 1, limit = 10 } = req.query

	const skip = (page - 1) * limit

	const data = await Filter.find({}, '', { skip, limit })

	res.status(200).json(data)
}

module.exports = getExercisesFilters
