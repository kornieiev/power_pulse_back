const Joi = require('joi')

const UserProductSchema = Joi.object({
	productId: Joi.string().required(),
	date: Joi.string()
		.pattern(/^\d{2}-\d{2}-\d{4}$/)
		.required(),
	amount: Joi.number().min(1).required(),
	calories: Joi.number().min(1).required(),
})

const UserExercisesSchema = Joi.object({
	exerciseId: Joi.string().required(),
	date:
		Joi.string()
			.pattern(/^\d{2}-\d{2}-\d{4}$/)
			.required() || date(),

	time: Joi.number().min(1).required(),
	calories: Joi.number().min(1).required(),
})

module.exports = {
	UserProductSchema,
	UserExercisesSchema,
}
