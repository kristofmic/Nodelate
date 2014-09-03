var
  crypto = require('crypto'),
  bufferEqual = require('buffer-equal'),
  Promise = require('bluebird'),
  User = require('../../models/user'),
  pbkdf2 = Promise.promisify(crypto.pbkdf2);

module.exports = {
  create: create,
  destroy: destroy
};

function create(req, res) {
  var
    email = req.body.email,
    password = req.body.password;

  if (!email && !password) { res.json(400, 'Invalid email or password. Please try again.' ); }

  Promise.join(
      pbkdf2(password, process.env.SALT, 3, 20),
      findUser(),
      verifyPassword
    )
    .then(createToken)
    .then(updateUser)
    .then(sendResponse)
    .catch(handleError);

  function findUser() {
    return User.findOne().where({ email: email }).exec();
  }

  function verifyPassword(key, user) {
    if (user && bufferEqual(key, user.password)) {
      return {
        user: user,
        key: key
      };
    }
    else {
      return Promise.reject('Username or password is invalid. Please try again.');
    }
  }

  function createToken(userData) {
    var
      hash = crypto.createHash('sha1');

    hash.update(email + userData.key + Date.now());

    return {
      token: hash.digest('hex'),
      user: userData.user
    };
  }

  function updateUser(userData) {
    var
      expirationDate = new Date(),
      user = userData.user,
      userParams;

    userParams = {
      token: userData.token,
      tokenExpiration: expirationDate.setDate(expirationDate.getDate() + 10)
    };

    return User.updateUser(user, userParams);
  }

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

function destroy(req, res) {
  var
    token = req.header('token');

  User.findByToken(token)
    .then(destroyToken)
    .then(sendResponse)
    .catch(handleError);

  function destroyToken(user) {
    var
      userParams;

    userParams = {
      token: null,
      tokenExpiration: null
    };

    return User.updateUser(user, userParams);
  }

  function sendResponse(user) {
    res.json(200, 'Success');
  }

  function handleError(err) {
    console.log(err);
    res.json(500, err || 'There was a problem. Please try again.');
  }
}