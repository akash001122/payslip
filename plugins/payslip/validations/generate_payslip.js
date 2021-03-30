'use strict';

const Joi = require('joi');

module.exports = {
    query: Joi.object({
        employeeId: Joi.string().required(),
        month_or_year: Joi.string().required(),
        lop: Joi.number().integer(),
    })
};
