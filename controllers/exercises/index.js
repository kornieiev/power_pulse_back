const { controllerWrapper } = require('../../helpers')

const getExercisesFilters = require('./getExercisesFilters')
const getExercises = require('./getExercises')

module.exports = {
	getExercisesFilters: controllerWrapper(getExercisesFilters),
	getExercises: controllerWrapper(getExercises),
}
