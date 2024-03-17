const { Schema, model } = require('mongoose')
const { handleMongooseError } = require('../helpers')

const diaryExerciseSchema = new Schema(
	{
		owner: {
			type: Schema.Types.ObjectId,
			ref: 'exercise',
			required: true,
		},
		date: {
			type: String,
			match: /^\d{2}-\d{2}-\d{4}$/,
			required: true || date,
		},
		burnedCalories: {
			type: Number,
			default: 0,
		},
		totalExerciseTime: {
			type: Number,
			default: 0,
		},

		exerciseArr: [
			{
				exerciseId: {
					type: Schema.Types.ObjectId,
					ref: 'exercise',
					required: true,
				},
				calories: {
					type: Number,
					minimum: 1,
					required: true,
				},
				time: {
					type: Number,
					minimum: 1,
					required: true,
				},
				bodyPart: {
					type: String,
				},
				equipment: {
					type: String,
				},
				name: {
					type: String,
				},
				target: {
					type: String,
				},
			},
		],
	},

	{ versionKey: false }
)

diaryExerciseSchema.post('save', handleMongooseError)

const DiaryExercise = model('diaryExercise', diaryExerciseSchema)

module.exports = DiaryExercise
