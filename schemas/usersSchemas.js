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

const subscribeUserSchema = Joi.object({
  subscription: Joi.string().valid("starter", "pro", "business").required(),
});

module.exports = {
  registerUserSchema,
  loginUserSchema,
  currentUserSchema,
  subscribeUserSchema,
  reVerificationSchema,
};
