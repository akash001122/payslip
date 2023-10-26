'use strict';
const Employee = require('../schemas/employee');

module.exports = {
  name: 'get_employee_by_id',
  method: async (employeeId) => {
    try {
      const employeeDetails = await Employee.findOne({_id: employeeId, visibility: true});
      if (!employeeDetails) {
        throw 'Invalid Employee Id';
      }
      return employeeDetails;
    } catch (e) {
      throw e;
    }
  }
};
