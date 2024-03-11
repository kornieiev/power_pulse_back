const { DiaryExercise } = require('../../models')
const { DiaryProduct } = require('../../models')

const getProductsAndExercises = async (req, res) => {
	const { _id: owner } = req.user

	const [products, exercises] = await Promise.all([
		DiaryProduct.find({ owner }).populate(
			'productArr.productId',
			'title category groupBloodNotAllowed'
		),
		DiaryExercise.find({ owner }).populate(
			'exerciseArr.exerciseId',
			'bodyPart equipment'
		),
	])

	const data = [...products, ...exercises]

	res.json(data)
}

module.exports = getProductsAndExercises
