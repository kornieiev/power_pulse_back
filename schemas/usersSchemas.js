const Joi = require("joi");

const emailRegexp = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

const registerUserSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().pattern(emailRegexp).required().empty(false).messages({
    "string.base": "The email must be a string.",
    "any.required": "The email field is required.",
    "string.empty": "The email must not be empty.",
    "string.pattern.base": "The email must be in format test@gmail.com.",
  }),
  password: Joi.string().required(),
});

const loginUserSchema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required().empty(false).messages({
    "string.base": "The email must be a string.",
    "any.required": "The email field is required.",
    "string.empty": "The email must not be empty.",
    "string.pattern.base": "The email must be in format test@gmail.com.",
  }),
  password: Joi.string().required(),
});

const reVerificationSchema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required().empty(false).messages({
    "string.base": "The email must be a string.",
    "any.required": "The email field is required.",
    "string.empty": "The email must not be empty.",
    "string.pattern.base": "The email must be in format test@gmail.com.",
  }),
});

const addMetricsSchema = Joi.object({
  height: Joi.number().min(150),
  currentWeight: Joi.number().min(35),
  desiredWeight: Joi.number().min(35),
  birthday: Joi.date().max(
    new Date(new Date().setFullYear(new Date().getFullYear() - 18))
  ),
  blood: Joi.number().valid(1, 2, 3, 4),
  sex: Joi.string().valid("male", "female"),
  levelActivity: Joi.number().valid(1, 2, 3, 4, 5),
  age: Joi.number().min(18),
  userName: Joi.string(),
  resultBMR: Joi.number(),
  avatar: Joi.string(),
  email: Joi.string().email(),
});

module.exports = {
  registerUserSchema,
  loginUserSchema,
  reVerificationSchema,
  addMetricsSchema,
};
