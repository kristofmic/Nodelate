var
  mongoose = require('mongoose'),
  Promise = require('bluebird'),
  _ = require('lodash'),
  schema,
  userSchema,
  User;

userSchema = {
  email: { type: String, index: true, unique: true },
  password: Buffer,
  token: { type: String, unique: true, sparse: true },
  tokenExpiration: Date,
  isActive: Boolean
};

schema = mongoose.Schema(userSchema);
User = mongoose.model('User', schema);

User.findByEmail = findByEmail;
User.findByToken = findByToken;
User.updateUser = updateUser;

module.exports = User;

function findByEmail(email) {
  if (email) {
    return new Promise(defer);
  }
  else {
    return Promise.reject('No email provided.');
  }

  function defer(resolve, reject) {
    User.findOne().where({ email: email }).exec(function(err, user) {
      if (!err) { resolve(user); }
      else { reject(err); }
    });
  }
}

function findByToken(token) {
  if (token) {
    return new Promise(defer);
  }
  else {
    return Promise.reject('No token provided.');
  }

  function defer(resolve, reject) {
    User.findOne().where({ token: token, tokenExpiration: { $gte: new Date() } }).exec(function(err, user) {
      if (!err) { resolve(user); }
      else { reject(err); }
    });
  }
}

function updateUser(user, userParams) {
  return new Promise(defer);

  function defer(resolve, reject) {
    var
      permittedParams = _.keys(userSchema);

    _.each(permittedParams, function(param) {
      if (userParams.hasOwnProperty(param)) {
        user[param] = userParams[param];
      }
    });

    user.save(function(err, updatedUser) {
      if (err) { reject(err); }
      else { resolve(updatedUser); }
    });
  }
}