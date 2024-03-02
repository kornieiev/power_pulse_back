const { controllerWrapper } = require('../../helpers')

const addUserProducts = require('./addUserProducts')
const addUserExercises = require('./addUserExercises')
const getProductAndExercises = require('./getProductAndExercises')
const deleteUserProducts = require('./deleteUserProducts')
const deleteUserExercises = require('./deleteUserExercises')

module.exports = {
	addUserProducts: controllerWrapper(addUserProducts),
	addUserExercises: controllerWrapper(addUserExercises),
	getProductAndExercises: controllerWrapper(getProductAndExercises),
	deleteUserProducts: controllerWrapper(deleteUserProducts),
	deleteUserExercises: controllerWrapper(deleteUserExercises),
}
