'use strict';

module.exports = {
  method: 'DELETE',
  path: '/api/employee/delete',
  options: {
    tags: ['api'],
    description: 'Deletes employee',
    auth: 'jwt',
    plugins: { hacli: { permissions: ['hr'] } },
    validate: require('../validations/delete_employee'),
  },
  handler: require('../handlers/delete_employee'),
};
