const { Schema, model } = require('mongoose')
const Joi = require('joi')

const { handleMongooseError } = require('../helpers')

const exerciseSchema = new Schema({
	bodyPart: { type: String },
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

// {
//   "_id": {
//     "$oid": "64f2458d6f67bc34bae4f966"
//   },
//   "bodyPart": "upper arms",
//   "equipment": "dumbbell",
//   "gifUrl": "https://ftp.goit.study/img/power-pulse/gifs/0420.gif",
//   "name": "dumbbell standing kickback",
//   "target": "triceps",
//   "burnedCalories": 177,
//   "time": 3
// }
