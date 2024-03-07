const { controllerWrapper } = require('../../helpers')

const getExercises = require('./getExercises')
const getExercisesTypes = require('./getExercisesTypes')

module.exports = {
	getExercises: controllerWrapper(getExercises),
	getExercisesTypes: controllerWrapper(getExercisesTypes),
}
