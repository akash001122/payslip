'use strict';

const Joi = require('joi');

module.exports = {
  params: Joi.object({
    userId: Joi.string().required(),
  }),
  payload: Joi.object({
    first_name: Joi.string().required(),
    last_name: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().required(),
    role: Joi.string(),
  }),
};
