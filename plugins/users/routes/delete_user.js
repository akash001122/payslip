'use strict';

module.exports = {
  method: 'POST',
  path: '/api/users/delete',
  options: {
    tags: ['api'],
    description: 'Creates a new user (hr or admin)',
    auth: 'jwt',
    plugins: {hacli: {permissions: ['admin']}},
    validate: require('../validations/delete_user.js'),
  },
  handler: require('../handlers/delete_user.js'),
};
