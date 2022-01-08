// validation
const Joi = require("@hapi/joi");

const registerValidator = Joi.object({
  name: Joi.string().min(6).max(255).required(),
  email: Joi.string().min(6).max(255).required().email(),
  password: Joi.string().min(8).max(1024).required(),
});

const loginValidator = Joi.object({
  email: Joi.string().min(6).max(255).required().email(),
  password: Joi.string().min(8).max(1024).required(),
});

module.exports.registerValidator = registerValidator;
module.exports.loginValidator = loginValidator;
