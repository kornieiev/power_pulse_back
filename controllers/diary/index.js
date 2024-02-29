const { controllerWrapper } = require('../../helpers')

const getUserProducts = require('./addUserProducts')
const getUserExercises = require('./addUserExercises')
const getProductAndExercises = require('./addProductAndExercises')
const deleteUserProducts = require('./deleteUserProducts')
const deleteUserExercises = require('./deleteUserExercises')

module.exports = {
	addUserProducts: controllerWrapper(getUserProducts),
	addUserExercises: controllerWrapper(getUserExercises),
	addProductAndExercises: controllerWrapper(getProductAndExercises),
	deleteUserProducts: controllerWrapper(deleteUserProducts),
	deleteUserExercises: controllerWrapper(deleteUserExercises),
}
