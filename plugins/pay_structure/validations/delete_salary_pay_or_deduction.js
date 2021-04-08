'use strict';

const Joi = require('joi');

module.exports = {
  query: Joi.object({
    salary_structure_id: Joi.array().items(Joi.string()).single(),
  }),
};
