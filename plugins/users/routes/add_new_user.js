'use strict';

module.exports = {
  method: 'POST',
  path: '/api/users/new-user',
  options: {
    tags: ['api'],
    description: 'Creates a new user (hr or admin)',
    auth: 'jwt',
    plugins: {hacli: {permissions: ['admin']}},
    validate: require('../validations/add_new_user'),
  },
  handler: require('../handlers/add_new_user'),
};
