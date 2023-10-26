'use strict';

module.exports = {
  method: 'GET',
  path: '/api/employee/get_all',
  options: {
    auth: 'jwt',
    description: 'Get Employees',
    notes: 'Fetches all employees details which can be done only by hr',
    tags: ['api'],
    plugins: {
      hapiAuthorization: {
        roles: ['hr'],
      },
    },
    handler: require('../handlers/get_all_employees'),
  },
};
