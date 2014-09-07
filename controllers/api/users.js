var
  Promise = require('bluebird'),
  User = require('../../models/user'),
  responder = require('../../lib/responder'),
  mailer = require('../../lib/mailer');

module.exports = {
  create: create,
  resetPassword: resetPassword,
  verifyEmail: verifyEmail
};

function create(req, res) {
  var
    email = req.body.email,
    password = req.body.password;

  if (!email && !password) { res.json(400, 'Missing email or password. Please try again.'); }

  User.findBy({ email: email })
    .then(verifyEmailUnique)
    .then(createUser)
    .then(sendVerification)
    .then(responder.handleResponse(res, 201, 'Success'))
    .catch(responder.handleError(res));

  function verifyEmailUnique(user) {
    if (user) {
      return Promise.reject('The email is already in use.');
    }
  }

  function createUser() {
    return User.createOne(email, password);
  }

  function sendVerification(user) {
    var
      mailerOptions;

    mailerOptions = {
      from: 'do-not-reply@grizzlyfeed.com',
      to: email,
      subject: 'Nodelate - Email Verification',
      html: '<p>Click <a href="http://localhost:3000/#/email_verification/' +
            user.emailVerificationToken +
            '">this link</a> to verify your email.</p>' +
            '<br />' +
            '<p>If clicking the link does not work, you may copy and paste it directly into the browser window: ' +
            'http://localhost:3000/#/email_verification/' + user.emailVerificationToken + '</p>',
      text: 'To verify your email, click the following link: http://localhost:3000/#/email_verification/' + user.emailVerificationToken
    };

    return mailer.send(mailerOptions);
  }

}

function verifyEmail(req, res) {
  var
    verificationToken = req.body.verificationToken;

  User.findBy({ emailVerificationToken: verificationToken })
    .then(verifyUser)
    .then(User.updateOne)
    .then(responder.handleResponse(res, null, ['email']))
    .catch(responder.handleError(res));

  function verifyUser(user) {
    if (!user) { return Promise.reject(); }
    else {
      user.emailVerificationToken = null;
      user.isVerified = true;

      return user;
    }
  }
}

function resetPassword(req, res) {
  var
    resetToken = req.body.resetToken,
    newPassword = req.body.password;

  User.findBy({ passwordResetToken: resetToken, passwordResetTokenExpiration: { $gte: new Date() }})
    .then(updatePassword)
    .then(User.updateOne)
    .then(responder.handleResponse(res, null, 'Success'))
    .catch(responder.handleError(res));

  function updatePassword(user) {
    if (!user) { responder.handleError(res, null, 'The password reset token is invalid or has expired. Please try again.')(); }
    else {
      return User.updatePassword(user, newPassword);
    }
  }
}

