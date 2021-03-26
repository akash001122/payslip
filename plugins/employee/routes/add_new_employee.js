'use strict';

module.exports = {
  method: 'POST',
  path: '/api/employee/create',
  options: {
    tags: ['api'],
    description: 'Creates a new employee',
    auth: 'jwt',
    plugins: { hacli: { permissions: ['hr'] } },
    validate: require('../validations/add_new_employee'),
  },
  handler: require('../handlers/add_new_employee'),
};
