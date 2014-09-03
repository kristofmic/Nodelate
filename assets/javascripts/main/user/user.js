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

    init();

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
        .then(setUserFromResponse);
    }

    function create(userParams) {
      return $auth.signup(userParams)
        .then(setUserFromResponse);
    }

    function login(credentials) {
      return $auth.login(credentials)
        .then(setUserFromResponse);
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

    function setUserFromResponse(res) {
      _.extend(userStore, res.data);
    }

    function clear() {
      userStore = {};
    }
  }

})(angular);