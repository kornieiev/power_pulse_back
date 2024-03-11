const { default: mongoose } = require('mongoose')
const { HttpError } = require('../../helpers')
const { DiaryProduct } = require('../../models')
const ObjectId = mongoose.Types.ObjectId

const deleteUserProducts = async (req, res) => {
	const { _id: owner } = req.user
	const { id } = req.params
	const { date } = req.body
	// console.log(id)
	const findProduct = await DiaryProduct.findOne({ owner, date })

	if (!findProduct) {
		throw HttpError(404, 'Not found')
	}

	const index = findProduct.productArr.findIndex(product => {
		const ind = product.productId._id === ObjectId(id)
		// console.log('productId', product.productId._id)

		// console.log('queryId', ObjectId(id))

		return ind
	})
	console.log(index)
	const result = await DiaryProduct.findByIdAndUpdate(
		findProduct._id,
		{
			$inc: {
				consumedCalories: -findProduct.productArr[index].calories,
				totalProductWeight: -findProduct.productArr[index].amount,
			},
			$pull: { productArr: { productId: id } },
		},
		{ new: true }
	)

	res.status(200).json(result)
}

module.exports = deleteUserProducts
