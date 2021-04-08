'use strict';

const Joi = require('joi');

module.exports = {
  params: Joi.object({
    salary_structure_id: Joi.string().required(),
  }),
  payload: Joi.object({
    name: Joi.string(),
    slab: Joi.string(),
    type: Joi.string(),
    percentage_or_amount: Joi.string(),
    value: Joi.number(),
  }),
};
