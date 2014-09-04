var
  crypto = require('crypto'),
  Promise = require('bluebird'),
  User = require('../../models/user'),
  pbkdf2 = Promise.promisify(crypto.pbkdf2);

module.exports = {
  create: create,
  show: show
};

function create(req, res) {
  var
    email = req.body.email,
    password = req.body.password;

  if (!email && !password) { res.json(400, 'Missing email or password. Please try again.'); }

  User.findByEmail(email)
    .then(verifyEmailUnique)
    .then(createPasswordHash)
    .then(createUser)
    .then(sendResponse)
    .catch(handleError);

  function verifyEmailUnique(user) {
    if (user) {
      return Promise.reject('Email already taken. Please try again.');
    }
  }

  function createPasswordHash() {
    return pbkdf2(password, process.env.SALT, 3, 20);
  }

  function createUser(key) {
    var
      newUser,
      deferredPromise = new Promise(defer);

    return deferredPromise;

    function defer(resolve, reject) {
      newUser = new User({
        email: email,
        password: key,
        isActive: true
      });

      newUser.save(function(err, user) {
        if (err) { reject(err); }
        else { resolve(user); }
      });
    }
  }

  function sendResponse() {
    res.json(200, 'Success');
  }

  function handleError(err) {
    res.json(500, err || 'There was a problem. Please try again.');
  }
}

function show(req, res) {
  var
    email = req.body.email;

  return User.findByEmail(email)
    .then(sendResponse)
    .catch(handleError);

  function sendResponse(user) {
    res.json(200, {
      email: user.email,
      token: user.token,
      isActive: user.isActive
    });
  }

  function handleError(err) {
    res.json(500, err || 'There was a problem. Please try again.');
  }
}