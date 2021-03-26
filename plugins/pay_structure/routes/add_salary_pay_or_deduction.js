'use strict';

module.exports = {
  method: 'POST',
  path: '/api/pay_structure/create',
  options: {
    tags: ['api'],
    description: 'Creates salary pay or deduction',
    auth: 'jwt',
    plugins: { hacli: { permissions: ['hr'] } },
    validate: require('../validations/add_salary_pay_or_deduction'),
  },
  handler: require('../handlers/add_salary_pay_or_deduction'),
};
