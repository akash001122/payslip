'use strict';

const Boom = require('@hapi/boom');
const Bcrypt = require('bcrypt');
const users = require('../schemas/users');

module.exports = async (request, h) => {
  try {
    const {payload} = request;
    const hashPassword = await Bcrypt.hash(payload.password, 10);
    payload.password = hashPassword;
    const user = await users.create(payload);
    return {
      statusCode: 201,
      message: 'User is created',
      data: user,
    };
  } catch (e) {
    return Boom.badRequest(e);
  }
};
