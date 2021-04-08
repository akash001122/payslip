'use strict';

module.exports = {
  method: 'DELETE',
  path: '/api/pay_structure/delete/{salary_structure_id}',
  options: {
    tags: ['api'],
    description: 'Deletes salary pay or deduction by id',
    auth: 'jwt',
    plugins: {hacli: {permissions: ['hr']}},
    validate: require('../validations/delete_salary_pay_or_deduction'),
  },
  handler: require('../handlers/delete_salary_pay_or_deduction'),
};
