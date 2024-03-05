const getFilteredProducts = require('./getFilteredProducts')
const getProductsCategories = require('./getProductsCategories')
const { controllerWrapper } = require('../../helpers')

module.exports = {
	getFilteredProducts: controllerWrapper(getFilteredProducts),
	getProductsCategories: controllerWrapper(getProductsCategories),
}
