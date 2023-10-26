'use strict';

const Boom = require('@hapi/boom');
const employee = require('../schemas/employee');

module.exports = async (request, h) => {
  try {
    const {payload} = request;

    const employeeDetails = await employee.create(payload);
    return {
      statusCode: 201,
      message: 'Employee is created',
      data: employeeDetails,
    };
  } catch (e) {
    return Boom.badRequest(e);
  }
};
