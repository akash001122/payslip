'use strict';

const Joi = require('joi');

module.exports = {
  query: Joi.object({
    userId: Joi.array().items(Joi.string()).single(),
  }),
};
