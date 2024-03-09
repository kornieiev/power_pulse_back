const { Metric } = require('../../models')
const { User } = require('../../models')

const currentUser = async (req, res, next) => {
	const { _id: owner, email } = req.user

	const userMetric = await Metric.find({ owner })
	const userInfo = await User.find({ email })

	await User.updateOne(
		{ owner },
		{
			$set: { metrics: userMetric[0] },
		},
		{ new: true }
	)

	const user = [...userInfo, ...userMetric]

	res.status(200).json(user)
}
module.exports = currentUser
