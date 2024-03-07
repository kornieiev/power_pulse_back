const { Schema, model } = require('mongoose')
const { handleMongooseError } = require('../helpers')

const filterSchema = new Schema({
	filter: {
		type: String,
		required: true,
	},
	name: {
		type: String,
		required: true,
	},
	imgURL: {
		type: String,
		required: true,
	},
})

filterSchema.post('save', handleMongooseError)
const Filter = model('filters', filterSchema)

module.exports = Filter
