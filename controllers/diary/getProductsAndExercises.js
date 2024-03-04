const { DiaryExercise } = require('../../models')
const { DiaryProduct } = require('../../models')

const getProductsAndExercises = async (req, res) => {
	const { _id: owner } = req.user

	const [products, exercises] = await Promise.all([
		DiaryProduct.find({ owner }),
		DiaryExercise.find({ owner }),
	])

	const data = [...products, ...exercises]

	res.json(data)
}

module.exports = getProductsAndExercises
