const { DiaryProduct } = require('../../models')

const deleteUserProducts = async (req, res) => {
	const { id } = req.params
	// const deleteProduct = await DiaryProduct.findByIdAndDelete(id)

	const findProduct = await DiaryProduct.findOne({ id })

	if (!findProduct) {
		throw HttpError(404, 'Not found')
	}

	const result = await DiaryProduct.findByIdAndUpdate(
		id,
		{
			$inc: { consumedCalories: -productArr.calories, totalWeight: -amount },
			$pull: { productArr: { _id: productArrId } },
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
