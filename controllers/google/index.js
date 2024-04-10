const googleRedirect = require('./googleRedirect')
const googleAuth = require('.//googleAuth')
const { controllerWrapper } = require('../../helpers')

module.exports = {
	googleAuth: controllerWrapper(googleAuth),
	googleRedirect: controllerWrapper(googleRedirect),
}
