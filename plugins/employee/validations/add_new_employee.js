'use strict';

const Joi = require('joi');

module.exports = {
  payload: Joi.object({
    name: Joi.string().required(),
    mobile: Joi.string().required(),
    email: Joi.string().required(),
    address: Joi.string().required(),
    department_name: Joi.string().required(),
    date_of_joining: Joi.date().required(),
    ctc: Joi.number().integer().required(),
    pan_number: Joi.string().required(),
    bank_details: Joi.array().items(Joi.object({
        bank_name: Joi.string().required(),
        bank_ifsc: Joi.string().required(),
        account_number: Joi.string().required(),
    }))
  })
};