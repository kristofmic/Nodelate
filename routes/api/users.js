var
  Promise = require('bluebird'),
  User = require('../../models/user'),
  responder = require('../../helpers/responder');

module.exports = {
  create: create,
  show: show
};

function create(req, res) {
  var
    email = req.body.email,
    password = req.body.password;

  if (!email && !password) { res.json(400, 'Missing email or password. Please try again.'); }

  User.findBy({ email: email })
    .then(verifyEmailUnique)
    .then(createUser)
    .then(responder.handleResponse(res, null, 'Success'))
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

function show(req, res) {
  var
    email = req.body.email;

  return User.findBy({ email: email })
    .then(responder.handleResponse(res, null, ['email', 'token', 'isActive']))
    .catch(responder.handleError(res));
}