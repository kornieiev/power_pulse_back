const { DiaryProduct } = require('../../models')

const addUserProducts = async (req, res) => {
	const { _id: owner } = req.user

	const { date, calories, amount, productId } = req.body

	const findDate = await DiaryProduct.findOne({ owner, date })

	if (findDate) {
		const updateResults = await DiaryProduct.findByIdAndUpdate(
			findDate._id,
			{
				$inc: { consumedCalories: +calories, totalProductWeight: +amount },
				$push: { productArr: { productId, amount, calories } },
			},
			{ new: true }
		)
		res.status(201).json(updateResults)
		return
	}

	const newResult = await DiaryProduct.create({
		owner,
		date,
		productId,
		consumedCalories: calories,
		totalProductWeight: amount,

		productArr: [{ productId, amount, calories }],
	})

	res.status(201).json(newResult)
}

module.exports = addUserProducts

// const diaryEntry = await Diary.findOneAndUpdate(
//     {
//       owner,
//       "addProducts.productId": productId,
//       "addProducts.date": date,
//     },
//     {
//       $inc: {
//         "addProducts.$.amount": +amount,
//         "addProducts.$.calories": +calories,
//       },
//     },
//     { new: true }
//   ).populate("addProducts.productId");

//   if (!diaryEntry) {
//     const newDiaryEntry = await Diary.findOneAndUpdate(
//       { owner, date },
//       {
//         $push: {
//           addProducts: {
//             productId,
//             date,
//             amount,
//             calories,
//           },
//         },
//       },
//       { upsert: true, new: true }
//     ).populate("addProducts.productId");
