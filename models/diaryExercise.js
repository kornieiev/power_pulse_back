const { Schema, model } = require('mongoose')
const { handleMongooseError } = require('../helpers')

const diaryExerciseSchema = new Schema(
	{
		exerciseId: {
			type: String,
			required: true,
		},
		date: {
			type: String,
			match: /^\d{2}-\d{2}-\d{4}$/,
			require: true || date,
		},
		time: {
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
			ref: 'exercise',
			required: true,
		},
	},

	{ versionKey: false, timestamps: true }
)

diaryExerciseSchema.post('save', handleMongooseError)

const DiaryExercises = model('diaryExerciseSchema', diaryExerciseSchema)

module.exports = DiaryExercises
