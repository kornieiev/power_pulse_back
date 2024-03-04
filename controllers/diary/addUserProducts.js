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

		productArr: { productId, calories, amount },
	})

	res.status(201).json(newResult)
}

module.exports = addUserProducts
