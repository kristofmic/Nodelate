var
  LocalStrategy = require('passport-local').Strategy,
  User = require('../models/user');

module.exports = passportConfig;

function passportConfig(passport) {
  var
    localSignup,
    localLogin;

  localSignup = new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
  }, signupUser);

  localLogin = new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
  }, loginUser);

  passport.use('local-signup', localSignup);
  passport.use('local-login', localLogin);
}

function signupUser(email, password, done) {
  User.findBy({ email: email })
    .then(handleSuccess)
    .catch(handleError(done));

  function handleSuccess(user) {
    if (user) {
      return done(null, false, { message: 'The email is already in use.' });
    }
    else {
      User.createOne(email, password)
        .then(handleUserCreated)
        .catch(handleUserError);
    }

    function handleUserCreated(user) {
      return done(null, user);
    }

    function handleUserError(err) {
      return done(err);
    }
  }
}

function loginUser(email, password, done) {
  User.findBy({ email: email })
    .then(handleSuccess)
    .catch(handleError(done));

  function handleSuccess(user) {
    if (!user || !User.isValidPassword(password, user.password)) {
      return done(null, false, { message: 'Incorrect username or password.' });
    }
    else {
      return done(null, user);
    }
  }
}

function handleError(done) {
  return returnDone;

  function returnDone(err) {
    return done(err);
  }
}