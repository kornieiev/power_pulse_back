const { Schema, model } = require('mongoose')
const { handleMongooseError } = require('../helpers')

const diaryProductSchema = new Schema(
	{
		productId: {
			type: String,
			required: true,
		},
		date: {
			type: String,
			match: /^\d{2}-\d{2}-\d{4}$/,
			require: true || date,
		},
		amount: {
			type: Number,
			minimum: 1,
			require: true,
		},
		calories: {
			type: Number,
			minimum: 1,
			require: true,
		},
		owner: {
			type: Schema.Types.ObjectId,
			ref: 'product',
			required: true,
		},
	},
	{ versionKey: false, timestamps: true }
)

diaryProductSchema.post('save', handleMongooseError)

const DiaryProducts = model('diaryProduct', diaryProductSchema)

module.exports = DiaryProducts
