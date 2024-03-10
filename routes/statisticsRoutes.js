const express = require('express')

const statisticsRouters = express.Router()

const getStatistics = require('../controllers/statistics/getStatistics')

// get user statistics
statisticsRouters.get('/', getStatistics)

module.exports = statisticsRouters
