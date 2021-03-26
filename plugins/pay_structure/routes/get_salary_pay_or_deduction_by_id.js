'use strict';

module.exports = {
  method: 'GET',
  path: '/api/pay_structure/get',
  options: {
    tags: ['api'],
    description: 'Fetches all salary pay and deductions',
    auth: 'jwt',
    plugins: { hacli: { permissions: ['hr'] } },
  },
  handler: require('../handlers/get_all_salary_pay_or_deduction'),
};
