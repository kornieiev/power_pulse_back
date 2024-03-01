const { controllerWrapper } = require('../../helpers')

const getUserProducts = require('./addUserProducts')
const getUserExercises = require('./addUserExercises')
const getProductAndExercises = require('./getProductAndExercises')
const deleteUserProducts = require('./deleteUserProducts')
const deleteUserExercises = require('./deleteUserExercises')

module.exports = {
	addUserProducts: controllerWrapper(getUserProducts),
	addUserExercises: controllerWrapper(getUserExercises),
	getProductAndExercises: controllerWrapper(getProductAndExercises),
	deleteUserProducts: controllerWrapper(deleteUserProducts),
	deleteUserExercises: controllerWrapper(deleteUserExercises),
}
