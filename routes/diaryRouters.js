const express = require('express')
const diaryRouter = express.Router()

const { authenticate } = require('../middlewares/authenticate')

const {
	addProductAndExercises,
	deleteUserExercises,
	addUserExercises,
	addUserProducts,
	deleteUserProducts,
} = require('../controllers/diary')

const { validateBody } = require('../helpers')
const {
	UserProductSchema,
	UserExercisesSchema,
} = require('../schemas/diarySchemas')

// add product
diaryRouter.post(
	'/products',
	authenticate,
	validateBody(UserProductSchema),
	addUserProducts
)

// add exercises
diaryRouter.post(
	'/exercises',
	authenticate,
	validateBody(UserExercisesSchema),
	addUserExercises
)

// get product and exercises

diaryRouter.get('/productAndExercises', authenticate, addProductAndExercises)

// delete products
diaryRouter.delete('/products:/id', authenticate, deleteUserProducts)

// delete exercises
diaryRouter.delete('/exercises:/id', authenticate, deleteUserExercises)

module.exports = diaryRouter
