const express = require('express')

const { authenticate } = require('../middlewares')
const {
	getProductsCategories,
	getFilteredProducts,
} = require('../controllers/products')

const productsRouter = express.Router()

productsRouter.get('/', authenticate, getProductsCategories)
productsRouter.get('/category', getFilteredProducts)

module.exports = productsRouter
