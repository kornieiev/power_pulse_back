const Joi = require('joi')

const UserProductSchema = Joi.object({
	product: Joi.string().required(),
	date:
		Joi.string()
			.pattern(new RegExp('^[0-9]{2}/[0-9]{2}/[0-9]{4}$'))
			.required() || date(),
	amount: Joi.number().min(1).required(),
	calories: Joi.number().min(1).required(),
})

// product(product ID) - string; required
// date - string; format dd/mm/YYYY; required || date
// amount - number; minimum 1(g); required
// calories - number; minimum 1; required

const UserExercisesSchema = Joi.object({
	exercise: Joi.string().required(),
	date:
		Joi.string()
			.pattern(new RegExp('^[0-9]{2}/[0-9]{2}/[0-9]{4}$'))
			.required() || date(),

	time: Joi.number().min(1).required(),
	calories: Joi.number().min(1).required(),
})

// exercise(exercise ID) - string; required
// date - string; format dd/mm/YYYY; required || date
// time - number; minimum 1(min); required
// calories - number; minimum 1; required

module.exports = {
	UserProductSchema,
	UserExercisesSchema,
}
