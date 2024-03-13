const Joi = require("joi");

const dateRegexp = /^\d{2}-\d{2}-\d{4}$/;
const dateFormat = {
  "string.pattern.base": "Date must be in format 01-01-2022",
};

const UserProductSchema = Joi.object({
  productId: Joi.string().required(),
  date: Joi.string().pattern(dateRegexp).required().messages(dateFormat),
  amount: Joi.number().min(1).required(),
  calories: Joi.number().min(1).required(),
});

const UserExercisesSchema = Joi.object({
  exerciseId: Joi.string().required(),
  date:
    Joi.string().pattern(dateRegexp).required().messages(dateFormat) || date(),

  time: Joi.number().min(1).required(),
  calories: Joi.number().min(1).required(),
});

module.exports = {
  UserProductSchema,
  UserExercisesSchema,
};
