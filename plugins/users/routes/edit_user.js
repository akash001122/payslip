'use strict';

module.exports = {
  method: 'PUT',
  path: '/api/users/edit{userId}',
  options: {
    tags: ['api'],
    description: 'Edit user',
    auth: 'jwt',
    plugins: {hacli: {permissions: ['admin']}},
    validate: require('../validations/edit_user.js'),
  },
  handler: require('../handlers/edit_user.js'),
};
