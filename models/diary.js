// const { Schema, model } = require('mongoose')
// const { handleMongooseError } = require('../helpers')

// const diary = new Schema(
// 	// exercise
// 	{
// 		exerciseId: {
// 			type: String,
// 			required: true,
// 		},
// 		date: {
// 			type: String,
// 			match: /^\d{2}-\d{2}-\d{4}$/,
// 			required: true || date,
// 		},
// 		time: {
// 			type: Number,
// 			minimum: 1,
// 			required: true,
// 		},
// 		calories: {
// 			type: Number,
// 			minimum: 1,
// 			required: true,
// 		},

// 		// products

// 		productId: {
// 			type: String,
// 			required: true,
// 		},
// 		date: {
// 			type: String,
// 			match: /^\d{2}-\d{2}-\d{4}$/,
// 			required: true || date,
// 		},
// 		amount: {
// 			type: Number,
// 			minimum: 1,
// 			required: true,
// 		},
// 		calories: {
// 			type: Number,
// 			minimum: 1,
// 			required: true,
// 		},
// 	},
// 	{ versionKey: false, timestamps: true }
// )

// diary.post('save', handleMongooseError)

// const Diary = model('diary', diary)

// module.exports = Diary
