'use strict';

const Joi = require('joi');

module.exports = {
  payload: Joi.object({
    name: Joi.string().required(),
    slab: Joi.string().required(),
    type: Joi.string().required(),
    pf: Joi.boolean().required(),
    basic_pay: Joi.boolean().required(),
    percentage_or_amount: Joi.string().required(),
    value: Joi.number().required(),
  }),
};
