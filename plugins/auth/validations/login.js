'use strict';

const Joi = require('joi');

module.exports = {
  payload: Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required()
  })
};