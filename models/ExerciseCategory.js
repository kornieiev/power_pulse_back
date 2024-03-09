const { Schema, model } = require('mongoose')

const { handleMongooseError } = require('../helpers')

const exerciseSchema = new Schema({})

exerciseSchema.post('save', handleMongooseError)

const Exercise = model('exercise', exerciseSchema)

module.exports = Exercise
