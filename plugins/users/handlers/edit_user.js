'use strict';

const Boom = require('@hapi/boom');
const users = require('../schemas/users');

module.exports = async (request, h) => {
  try {
    const {query, payload} = request;
    const options = {useFindAndModify: false, new: true};
    const user = await users.findOneAndUpdate({_id: {$in: query.userId}, visibility: true}, payload, options);
    return {
      statusCode: 201,
      message: 'User updated',
      data: user,
    };
  } catch (e) {
    return Boom.badRequest(e);
  }
};
