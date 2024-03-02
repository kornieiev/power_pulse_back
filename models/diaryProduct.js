const { Schema, model } = require('mongoose')
const { handleMongooseError } = require('../helpers')

const diaryProductSchema = new Schema(
	{
		product: {
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
		consumedCalories: {
			type: Number,
			default: 0,
		},
		totalProductWeight: {
			type: Number,
			default: 0,
		},
		productArr: {
			type: Array,
			default: [],
		},
		owner: {
			type: Schema.Types.ObjectId,
			ref: 'product',
			required: true,
		},
	},
	{ versionKey: false }
)

diaryProductSchema.post('save', handleMongooseError)

const DiaryProduct = model('diaryProduct', diaryProductSchema)

module.exports = DiaryProduct
