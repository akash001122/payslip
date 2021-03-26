'use strict';

const Joi = require('joi');

module.exports = {
  params: Joi.object({
      employeeId: Joi.string().required()
  }),
  payload: Joi.object({
    name: Joi.string(),
    mobile: Joi.string(),
    email: Joi.string(),
    address: Joi.string(),
    department_name: Joi.string(),
    date_of_joining: Joi.date(),
    ctc: Joi.number().integer(),
    pan_number: Joi.string(),
    bank_details: Joi.array().items(Joi.object({
        bank_name: Joi.string(),
        bank_ifsc: Joi.string(),
        account_number: Joi.string(),
    }))
  })
};