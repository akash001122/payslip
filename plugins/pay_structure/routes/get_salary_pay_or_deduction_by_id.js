'use strict';

module.exports = {
  method: 'GET',
  path: '/api/pay_structure/get',
  options: {
    tags: ['api'],
    description: 'Fetches all salary pay and deductions',
    auth: 'jwt',
    plugins: { hacli: { permissions: ['hr'] } },
    validate: require('../validations/get_salary_pay_or_deduction_by_id')
  },
  handler: require('../handlers/get_salary_pay_or_deduction_by_id'),
};
