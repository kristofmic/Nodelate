(function(angular) {

  var
    definitions;

  definitions = [
    '$http',
    '$auth',
    '_',
    userFactory
  ];

  angular.module('nl.User')
    .factory('user', definitions);

  function userFactory($http, $auth, _) {
    var
      self = {},
      userStore = {};

    self.create = create;
    self.login = login;
    self.logout = logout;
    self.get = get;
    self.set = set;

    return self;

    function create(userParams) {
      return $auth.signup(userParams)
        .then(setUserFromResponse);
    }

    function login(credentials) {
      return $auth.login(credentials)
        .then(setUserFromResponse);
    }

    function logout() {
      $http.delete('/api/sessions', { headers: { token: get('token') }});
      clearUser();
      $auth.logout();
    }

    function get(prop) {
      return userStore[prop];
    }

    function set(prop, val) {
      userStore[prop] = val;
    }

    function setUserFromResponse(res) {
      _.extend(userStore, res.data);
    }

    function clearUser() {
      userStore = {};
    }
  }

})(angular);