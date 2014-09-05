var
  uuid = require('node-uuid'),
  sessionDuration = 7 * 24 * 60 * 60 * 1000,
  resetDuration = 60 * 60 * 1000;

module.exports = {
  create: create,
  createSessionToken: createSessionToken,
  createPasswordResetToken: createPasswordResetToken
};

function create(activeDuration) {
  var
    token = uuid.v4(),
    expiration = new Date(Date.now() + activeDuration);

  return {
    token: token,
    expiration: expiration.setDate(expiration.getDate())
  };
}

function createSessionToken(user) {
  var
    sessionToken = create(sessionDuration);

  user.token = sessionToken.token;
  user.tokenExpiration = sessionToken.expiration;

  return user;
}

function createPasswordResetToken(user) {
  var
    pwToken = create(resetDuration);

  user.passwordResetToken = pwToken.token;
  user.passwordResetTokenExpiration = pwToken.expiration;

  return user;
}