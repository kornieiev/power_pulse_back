const express = require('express')

const { getExercises, getExercisesTypes } = require('../controllers/exercises')
const { authenticate } = require('../middlewares')

const exerciseRouters = express.Router()

// get all exercises
exerciseRouters.get('/', authenticate, getExercises)

// get filter exercises
exerciseRouters.get('/types', authenticate, getExercisesTypes)

module.exports = exerciseRouters
