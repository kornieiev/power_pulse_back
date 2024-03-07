const { Schema, model } = require('mongoose')
const Joi = require('joi')

const { handleMongooseError } = require('../helpers')

const exerciseSchema = new Schema({
	bodyPart: {
		type: String,
		ref: 'exercises',
		required: true,
	},
	equipment: { type: String },
	gifUrl: { type: String },
	name: { type: String },
	target: { type: String },
	burnedCalories: { type: Number },
	time: { type: Number },
})

exerciseSchema.post('save', handleMongooseError)

const Exercise = model('exercise', exerciseSchema)

module.exports = Exercise
