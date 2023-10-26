'use strict';

module.exports = {
  method: 'GET',
  path: '/api/users/get_all',
  options: {
    tags: ['api'],
    description: 'Gets All Users Details',
    auth: 'jwt',
    plugins: {hacli: {permissions: ['admin']}},
  },
  handler: require('../handlers/get_all_users'),
};
