const Joi = require("joi");

const registerUserSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

const loginUserSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

const reVerificationSchema = Joi.object({
  email: Joi.string().email().required(),
});

const currentUserSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

const addMetricsSchema = Joi.object({
  height: Joi.number().required().min(150),
  currentWeight: Joi.number().required().min(35),
  desiredWeight: Joi.number().required().min(35),
  birthday: Joi.date().max(
    new Date(new Date().setFullYear(new Date().getFullYear() - 18))
  ),
  blood: Joi.number().required().valid(1, 2, 3, 4),
  sex: Joi.string().required().valid("male", "female"),
  levelActivity: Joi.number().required().valid(1, 2, 3, 4, 5),
  age: Joi.number().required().min(18),
});

module.exports = {
  registerUserSchema,
  loginUserSchema,
  currentUserSchema,
  reVerificationSchema,
  addMetricsSchema,
};

// height - number; minimum 150(cm); required
// currentWeight - number; minimum 35(kg); required
// desiredWeight - number; minimum 35(kg); required
// birthday - date; must be older than 18 years;  required
// blood - number; allowed values 1, 2, 3, 4; required
// sex - string; allowed values "male", "female"; required
// levelActivity - number; allowed values 1, 2, 3, 4, 5; required
