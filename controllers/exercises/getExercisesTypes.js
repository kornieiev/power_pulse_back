const { Exercise } = require('../../models')

// const endpoints = require('./endpoints')

const getExercisesTypes = async (req, res) => {
	// const { filter, name, page, limit } = req.query
	// const findFilter = {}
	// let result = []
	// let total = 0
	// const category = Object.keys(endpoints).find(
	// 	endpoint => endpoints[endpoint].filter === filter
	// )
	// if (category) {
	// 	findFilter[endpoints[category].field] = name
	// }
	// res.json({ data: result, total })

	const { bodyPart, equipment, target } = req.body

	// if (bodyPart !== 'undefined') {
	// 	const data = await Exercise.find({ bodyPart })
	// 	// console.log(data)

	// 	res.json(data)
	// }

	// if (equipment !== undefined) {
	// 	const data = await Exercise.find({ equipment })
	// 	// console.log(data)

	// 	res.json(data)
	// }

	if (target !== undefined) {
		const data = await Exercise.find({ target })

		res.json(data)
	}
}

module.exports = getExercisesTypes
