'use strict';

const Joi = require('joi');

module.exports = {
  payload: Joi.object({
    name: Joi.string().required(),
    slab: Joi.string().required(),
    type: Joi.string().required(),
    percentage_or_amount: Joi.string().required(),
    value: Joi.number().required(),
  }),
};
