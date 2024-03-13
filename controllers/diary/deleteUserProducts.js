const { HttpError } = require('../../helpers')
const { DiaryProduct } = require('../../models')

const deleteUserProducts = async (req, res) => {
	const { _id: owner } = req.user
	const { id } = req.params
	const { date } = req.query

	console.log('id', id)
	const findProduct = await DiaryProduct.findOne({ owner, date })

	if (!findProduct) {
		throw HttpError(404, 'Not found')
	}

	const index = findProduct.productArr.findIndex(product => {
		const ind = product._id.toString() === id
		return ind
	})

	if (index === -1) {
		res.status(404).json('Product not found')
		return
	}

	const result = await DiaryProduct.findByIdAndUpdate(
		findProduct._id,
		{
			$inc: {
				consumedCalories: -findProduct.productArr[index].calories,
				totalProductWeight: -findProduct.productArr[index].amount,
			},
			$pull: { productArr: { _id: id } },
			// $pull: { productArr: findProduct.productArr[index] },
		},
		{ new: true }
	)

	res.status(200).json(result)
}

module.exports = deleteUserProducts
