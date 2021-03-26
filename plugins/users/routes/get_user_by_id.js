'use strict';

module.exports = {
  method: 'GET',
  path: '/api/users/get',
  options: {
    tags: ['api'],
    description: 'Gets User Details',
    auth: 'jwt',
    plugins: { hacli: { permissions: ['admin'] } },
    validate: require('../validations/get_user_by_id'),
  },
  handler: require('../handlers/get_user_by_id'),
};
