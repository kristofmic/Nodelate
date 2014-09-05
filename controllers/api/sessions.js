var
  Promise = require('bluebird'),
  User = require('../../models/user'),
  responder = require('../../lib/responder'),
  mailer = require('../../lib/mailer'),
  token = require('../../lib/token');

module.exports = {
  create: create,
  destroy: destroy,
  show: show,
  forgotPassword: forgotPassword
};

function create(req, res) {
  var
    email = req.body.email,
    password = req.body.password;

  if (!email && !password) { res.json(400, 'Invalid email or password. Please try again.' ); }

  User.findBy({ email: email })
    .then(verifyUser)
    .then(verifyPassword)
    .then(token.createSessionToken)
    .then(User.updateOne)
    .then(responder.handleResponse(res, null, ['email', 'token', 'isActive']))
    .catch(responder.handleError(res));

  function verifyUser(user) {
    return user ? user : Promise.reject('Invalid email or password. Please try again.');
  }

  function verifyPassword(user) {
    return User.isValidPassword(password, user.password)
      .then(resolveVerification);

    function resolveVerification(isValid) {
      return isValid ? user : Promise.reject('Invalid email or password. Please try again.');
    }
  }
}

function destroy(req, res) {
  var
    token = req.header('token');

  User.findBy({ token: token })
    .then(destroyToken)
    .then(responder.handleResponse(res, null, 'Success'))
    .catch(responder.handleError(res));

  function destroyToken(user) {
    var
      userParams;

    userParams = {
      token: null,
      tokenExpiration: null
    };

    return User.updateOne(user, userParams);
  }
}

function show(req, res) {
  var
    token = req.header('token');

  User.findBy({ token: token, tokenExpiration: { $gte: new Date() }})
    .then(sendResponse)
    .catch(responder.handleError(res));

  function sendResponse(user) {
    if (!user) { res.json(401, 'Token not found or expired.'); }
    else { responder.handleResponse(res, null, ['email', 'token', 'isActive'])(user); }
  }
}

function forgotPassword(req, res) {
  var
    email = req.body.email;

  User.findBy({ email: email })
    .then(verifyUser)
    .then(token.createPasswordResetToken)
    .then(User.updateOne)
    .then(sendReset)
    .then(responder.handleResponse(res, null, 'A link to reset your password has been sent to your email.'))
    .catch(responder.handleError(res));

  function verifyUser(user) {
    console.log('verify user', user);
    if (!user) { responder.handleResponse(res, null, 'A link to reset your password has been sent to your email.')(); }
    else { return user; }
  }

  function sendReset(user) {
    var
      mailerOptions;

    mailerOptions = {
      from: 'do-not-reply@grizzlyfeed.com',
      to: email,
      subject: 'Nodelate - Forgot Password',
      text: 'To reset your password, click the following link: http://localhost:3000/#/forgot_password/' + user.passwordResetToken
    };

    return mailer.send(mailerOptions);
  }
}
