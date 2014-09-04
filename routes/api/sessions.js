var
  Promise = require('bluebird'),
  uuid = require('node-uuid'),
  User = require('../../models/user'),
  responder = require('../../helpers/responder'),
  tokenActiveDuration = 7;

module.exports = {
  create: create,
  destroy: destroy,
  show: show
};

function create(req, res) {
  var
    email = req.body.email,
    password = req.body.password;

  if (!email && !password) { res.json(400, 'Invalid email or password. Please try again.' ); }

  User.findBy({ email: email })
    .then(verifyUser)
    .then(verifyPassword)
    .then(createToken)
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

  function createToken(user) {
    var
      token = uuid.v4(),
      expiration = new Date();

    user.token = token;
    user.tokenExpiration = expiration.setDate(expiration.getDate() + tokenActiveDuration);

    return user;
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