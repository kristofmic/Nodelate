(function(angular) {

  var
    definitions;

  definitions = [
    '$window',
    '$http',
    '$auth',
    '_',
    userFactory
  ];

  angular.module('nl.User')
    .factory('user', definitions);

  function userFactory($window, $http, $auth, _) {
    var
      self = {},
      userStore = {};

    //init();

    self.create = create;
    self.login = login;
    self.logout = logout;
    self.props = {
      get: getProp,
      set: setProp
    };

    return self;

    function init() {
      $http.get('/api/sessions', { headers: { token: $window.localStorage.nl_token }})
        .then(setUser);
    }

    function create(userParams) {
      return $auth.signup(userParams)
        .then(setUser);
    }

    function login(credentials) {
      return $auth.submitLogin(credentials)
        .then(setUser);
    }

    function logout() {
      $http.delete('/api/sessions', { headers: { token: getProp('token') }});
      clear();
      $auth.logout();
    }

    function getProp(prop) {
      return userStore[prop];
    }

    function setProp(prop, val) {
      userStore[prop] = val;
    }

    function setUser(userData) {
      _.extend(userStore, userData);
    }

    function clear() {
      userStore = {};
    }
  }

})(angular);