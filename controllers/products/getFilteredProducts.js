const { HttpError } = require('../../helpers')
const { Product, User } = require('../../models')

const getFilteredProducts = async (req, res) => {
	const { _id: owner } = req.user
	// const { category, title, groupBloodNotAllowed } = req.body
	const { category, title, groupBloodNotAllowed } = req.query

	console.log('category', category)
	console.log('title', title)

	const query = {}
	category && (query.category = category)
	title && (query.title = { $regex: title, $options: 'i' })

	const user = await User.findById(owner)

	if (groupBloodNotAllowed === 'recommended') {
		query[`groupBloodNotAllowed.${user.blood}`] = 'true'
	}
	if (groupBloodNotAllowed === 'not-recommended') {
		query[`groupBloodNotAllowed.${user.blood}`] = 'false'
	}

	const data = await Product.find(query)

	if (data.length < 1) {
		throw HttpError(404, 'Collection not found')
	}

	res.status(200).json(data)
}

module.exports = getFilteredProducts
