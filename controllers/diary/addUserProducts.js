const { DiaryProduct } = require('../../models')

const addUserProducts = async (req, res) => {
	const { _id: owner } = req.user

	const { date, calories, amount, productId, title, category } = req.body
	console.log('title', title)
	console.log('category', category)

	const findDate = await DiaryProduct.findOne({ owner, date })

	if (findDate) {
		const updateResults = await DiaryProduct.findByIdAndUpdate(
			findDate._id,
			{
				$inc: { consumedCalories: +calories, totalProductWeight: +amount },
				$push: { productArr: { productId, amount, calories, title, category } },
			},
			{ new: true }
		)
		res.status(201).json(updateResults)
		return
	}

	const newResult = await DiaryProduct.create({
		owner,
		date,
		consumedCalories: calories,
		totalProductWeight: amount,

		productArr: { productId, amount, calories, title, category },
	})

	res.status(201).json(newResult)
}

module.exports = addUserProducts
