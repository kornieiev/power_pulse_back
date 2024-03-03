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
		burnedCalories: {
			type: Number,
			default: 0,
		},
		totalExerciseTime: {
			type: Number,
			default: 0,
		},
		exerciseArr: {
			type: Array,
			default: [],
		},
		owner: {
			type: Schema.Types.ObjectId,
			ref: 'exercise',
			required: true,
		},
	},

	{ versionKey: false }
)

diaryExerciseSchema.post('save', handleMongooseError)

const DiaryExercise = model('diaryExercise', diaryExerciseSchema)

module.exports = DiaryExercise
