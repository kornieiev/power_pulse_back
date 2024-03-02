const express = require('express')
const diaryRouter = express.Router()

const { authenticate } = require('../middlewares/authenticate')

const {
	deleteUserExercises,
	addUserExercises,
	addUserProducts,
	deleteUserProducts,
	getProductAndExercises,
} = require('../controllers/diary')

const { validateBody } = require('../helpers')

const {
	UserProductSchema,
	UserExercisesSchema,
} = require('../schemas/diarySchemas')

// add product
diaryRouter.post(
	'/product',

	validateBody(UserProductSchema),
	addUserProducts
)

// add exercises
diaryRouter.post(
	'/exercise/:id',
	authenticate,
	validateBody(UserExercisesSchema),
	addUserExercises
)

// get product and exercises

diaryRouter.get('/productsAndExercises', authenticate, getProductAndExercises)

// delete products
diaryRouter.delete('/product:/id', authenticate, deleteUserProducts)

// delete exercises
diaryRouter.delete('/exercise:/id', authenticate, deleteUserExercises)

module.exports = diaryRouter
