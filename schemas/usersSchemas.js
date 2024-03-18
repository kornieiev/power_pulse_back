const Joi = require("joi");

const emailRegexp = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
const emailMessages = {
  "string.base": "The email must be a string.",
  "any.required": "The email field is required.",
  "string.empty": "The email must not be empty.",
  "string.pattern.base": "The email must be in format test@gmail.com.",
};

const registerUserSchema = Joi.object({
  userName: Joi.string().required(),
  email: Joi.string()
    .pattern(emailRegexp)
    .required()
    .empty(false)
    .messages(emailMessages),
  password: Joi.string().required(),
});

const loginUserSchema = Joi.object({
  email: Joi.string()
    .pattern(emailRegexp)
    .required()
    .empty(false)
    .messages(emailMessages),
  password: Joi.string().required(),
});

const reVerificationSchema = Joi.object({
  email: Joi.string()
    .pattern(emailRegexp)
    .required()
    .empty(false)
    .messages(emailMessages),
});

const addMetricsSchema = Joi.object({
  height: Joi.number().min(150),
  currentWeight: Joi.number().min(35),
  desiredWeight: Joi.number().min(35),
  birthday: Joi.string()
    .regex(/^\d{2}\.\d{2}\.\d{4}$/)
    .message("Date should be in format DD.MM.YYYY")
    .required(),
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
