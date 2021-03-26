'use strict';

module.exports = {
  method: 'GET',
  path: '/api/employee/get',
  options: {
    auth: 'jwt',
    description: 'Get Employee',
    notes: 'Fetches employee details by the employeeid passed in path which can be done only by hr',
    tags: ['api'],
    plugins: {
      hapiAuthorization: {
        roles: ['hr'],
      },
    },
    validate: require('../validations/get_employee_by_id'),
    handler: require('../handlers/get_employee_by_id')
  },
};
