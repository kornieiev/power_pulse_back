const { HttpError } = require('../../helpers')
const { Product, Metric } = require('../../models')

const getFilteredProducts = async (req, res) => {
	const { _id: owner } = req.user
	const { category, title, groupBloodNotAllowed } = req.body

	const query = {}
	category && (query.category = category)
	title && (query.title = { $regex: title, $options: 'i' })

	const [{ blood }] = await Metric.find({ owner })

	if (groupBloodNotAllowed === 'recommended') {
		query[`groupBloodNotAllowed.${blood}`] = 'false'
	}
	if (groupBloodNotAllowed === 'not recommended') {
		query[`groupBloodNotAllowed.${blood}`] = 'true'
	}

	const data = await Product.find(query)

	if (data.length < 1) {
		throw HttpError(404, 'collections not found')
	}

	res.json(data)
}

module.exports = getFilteredProducts
