const { HttpError } = require('../../helpers')
const { DiaryProduct } = require('../../models')

const deleteUserProducts = async (req, res) => {
	const { _id: owner } = req.user
	const { id } = req.params
	const { date, productId } = req.body
	console.log('productId', productId)

	const findProduct = await DiaryProduct.findOne({ owner, date })

	// const findProduct = await DiaryProduct.find(productId.productArr)

	console.log('findProduct', findProduct)

	if (!findProduct) {
		throw HttpError(404, 'Not found')
	}

	const result = await DiaryProduct.findByIdAndUpdate(
		findProduct,
		{
			$inc: {
				consumedCalories: -findProduct.productArr[0].calories,
				totalProductWeight: -findProduct.productArr[0].amount,
			},
			$pull: { productArr: { productId: id } },
		},
		{ new: true }
	)

	res.json(result)
}

module.exports = deleteUserProducts

// $inc $pull

// data = await Diary.findByIdAndUpdate(
//       foundedDiary._id,
//       {
//         $inc: { burnedCalories: -doneExercise.calories, sportTime: -time },
//         $pull: { doneExercises: { _id: doneExerciseId } },
//       },
//       { new: true },
//     )
