var
  Promise = require('bluebird'),
  User = require('../../models/user'),
  responder = require('../../lib/responder');

module.exports = {
  create: create,
  resetPassword: resetPassword
};

function create(req, res) {
  var
    email = req.body.email,
    password = req.body.password;

  if (!email && !password) { res.json(400, 'Missing email or password. Please try again.'); }

  User.findBy({ email: email })
    .then(verifyEmailUnique)
    .then(createUser)
    .then(responder.handleResponse(res, 201, ['email']))
    .catch(responder.handleError(res));

  function verifyEmailUnique(user) {
    if (user) {
      return Promise.reject('The email is already in use.');
    }
  }

  function createUser() {
    return User.createOne(email, password);
  }

}

function resetPassword(req, res) {
  var
    resetToken = req.body.resetToken,
    newPassword = req.body.password;

  User.findBy({ passwordResetToken: resetToken, passwordResetTokenExpiration: { $gte: new Date() }})
    .then(updatePassword)
    .then(User.updateOne)
    .then(responder.handleResponse(res, null, 'Your password has been reset. You may now login.'))
    .catch(responder.handleError(res));

  function updatePassword(user) {
    if (!user) { responder.handleError(res, null, 'The password reset token is invalid or has expired. Please try again.')(); }
    else {
      return User.updatePassword(user, newPassword);
    }
  }
}

