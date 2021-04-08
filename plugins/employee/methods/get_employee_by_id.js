'use strict';
const Employee = require('../schemas/employee');
const Boom = require('@hapi/boom');

module.exports = {
  name: 'get_employee_by_id',
  method: async (employeeId) => {
    try {
      const employeeDetails = await Employee.findOne({_id: employeeId, visibility: true});
      if (!employeeDetails) {
        throw Boom.badRequest('Invalid Employee Id');
      }
      return employeeDetails;
    } catch (e) {
      throw Boom.badRequest(e);
    }
  },
};
