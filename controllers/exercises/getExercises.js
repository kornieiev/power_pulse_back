const { HttpError } = require('../../helpers')
const { Exercise } = require('../../models')

const getExercises = async (req, res) => {
	// const { filter, name, page, limit } = req.query

	const { bodyPart, equipment, target } = req.body

	const query = {}
	bodyPart && (query.bodyPart = bodyPart)
	equipment && (query.equipment = equipment)
	target && (query.target = target)

	const data = await Exercise.find(query)

	if (data.length < 1) {
		throw HttpError(404, 'collections not found')
	}

	res.json(data)
}

module.exports = getExercises
