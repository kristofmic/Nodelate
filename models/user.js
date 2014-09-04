var
  mongoose = require('mongoose'),
  Promise = require('bluebird'),
  _ = require('lodash'),
  bcrypt = require('bcrypt'),
  handleDeferred = require('../helpers/responder').handleDeferred,
  paramFilter = require('../helpers/param_filter'),
  schema,
  schemaKeys,
  userSchema,
  User;

schema = {
  email: { type: String, index: true, unique: true },
  password: String,
  token: { type: String, sparse: true, unique: true },
  tokenExpiration: Date,
  isActive: Boolean
};
schemaKeys = _.keys(schema);
userSchema = mongoose.Schema(schema);
User = mongoose.model('User', userSchema);

User.findBy = findBy;
User.updateOne = updateOne;
User.createOne = createOne;
User.hashPassword = hashPassword;
User.isValidPassword = isValidPassword;

module.exports = User;

function findBy(params) {
  var
    deferredPromise = new Promise(defer);

  params = paramFilter(schemaKeys, params);

  return deferredPromise;

  function defer(resolve, reject) {
    User.findOne()
      .where(params)
      .exec(handleDeferred(resolve, reject));
  }
}

function updateOne(user, userParams) {
  var
    deferredPromise = new Promise(defer);

  userParams = paramFilter(schemaKeys, userParams);

  return deferredPromise;

  function defer(resolve, reject) {
    _.extend(user, userParams);

    user.save(handleDeferred(resolve, reject));
  }
}

function createOne(email, password) {
  return hashPassword(password)
    .then(createWithHash);

  function createWithHash(passwordHash) {
    var
      newUser,
      deferredPromise = new Promise(defer);

    return deferredPromise;

    function defer(resolve, reject) {
      newUser = new User({
        email: email,
        password: passwordHash,
        isActive: true
      });

      newUser.save(handleDeferred(resolve, reject));
    }
  }
}

function hashPassword(password) {
  var
    deferredPromise = new Promise(defer);

  return deferredPromise;

  function defer(resolve, reject) {
    bcrypt.genSalt(4, genHash);

    function genHash(err, salt) {
      if (err) { reject(err); }
      bcrypt.hash(password, salt, handleDeferred(resolve, reject));
    }
  }
}

function isValidPassword(password, hash) {
  var
    deferredPromise = new Promise(defer);

  return deferredPromise;

  function defer(resolve, reject) {
    bcrypt.compare(password, hash, handleDeferred(resolve, reject));
  }
}

