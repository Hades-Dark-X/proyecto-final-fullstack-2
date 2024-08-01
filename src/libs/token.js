const jwt = require('jsonwebtoken');
const tokenSecreto = require('../config').tokenSecreto;

function accessToken(payload) {
  return new Promise((resolve, reject) => {
    jwt.sign(
      payload,
      tokenSecreto,
      {
        expiresIn: '1h',
      },
      (error, token) => {
        if (error) reject(error);
        resolve(token);
      }
    );
  });
}

module.exports = accessToken;