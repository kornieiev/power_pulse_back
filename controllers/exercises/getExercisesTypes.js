// const { Exercise } = require('../../models/ExerciseCategory')

const endpoints = require('./endpoints')

const getExerciseFiltered = async (req, res) => {
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
}

module.exports = getExerciseFiltered

// {
//   "_id": {
//     "$oid": "64f2458d6f67bc34bae4f966"
//   },
//   "bodyPart": "upper arms",
//   "equipment": "dumbbell",
//   "gifUrl": "https://ftp.goit.study/img/power-pulse/gifs/0420.gif",
//   "name": "dumbbell standing kickback",
//   "target": "triceps",
//   "burnedCalories": 177,
//   "time": 3
// }
