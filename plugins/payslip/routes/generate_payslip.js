'use strict';

module.exports = {
  method: 'GET',
  path: '/api/payslip',
  options: {
    tags: ['api'],
    description: 'Generates payslip',
    auth: 'jwt',
    plugins: {hacli: {permissions: ['hr']}},
    validate: require('../validations/generate_payslip'),
  },
  handler: require('../handlers/generate_payslip'),
};
