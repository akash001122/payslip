'use strict';

module.exports = {
  method: 'PUT',
  path: '/api/employee/edit/{employeeId}',
  options: {
    tags: ['api'],
    description: 'Creates a new employee',
    auth: 'jwt',
    plugins: { hacli: { permissions: ['hr'] } },
    validate: require('../validations/edit_employee'),
  },
  handler: require('../handlers/edit_employee'),
};
