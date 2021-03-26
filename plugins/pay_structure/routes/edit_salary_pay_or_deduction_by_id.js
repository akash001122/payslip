'use strict';

module.exports = {
  method: 'PUT',
  path: '/api/pay_structure/edit/{salary_structure_id}',
  options: {
    tags: ['api'],
    description: 'Edits salary pay or deductions by id',
    auth: 'jwt',
    plugins: { hacli: { permissions: ['hr'] } },
    validate: require('../validations/edit_salary_pay_or_deduction_by_id'),
  },
  handler: require('../handlers/edit_salary_pay_or_deduction_by_id'),
};
