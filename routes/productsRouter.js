const express = require('express')

const { authenticate } = require('../middlewares')
const {
	getProductsCategories,
	getFilteredProducts,
} = require('../controllers/products')

const productsRouter = express.Router()

productsRouter.get('/categories', authenticate, getProductsCategories)
productsRouter.get('/filters', authenticate, getFilteredProducts)

module.exports = productsRouter
