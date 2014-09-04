(function(angular) {

  var
    definitions;

  definitions = [
    '$window',
    '$rootScope',
    '$http',
    '$auth',
    'authService',
    '$modal',
    '_',
    userFactory
  ];

  angular.module('nl.User')
    .factory('user', definitions);

  function userFactory($window, $rootScope, $http, $auth, authService, $modal, _) {
    var
      self = {},
      userStore = {};

    $rootScope.$on('event:auth-loginRequired', function(e, res) {
      $modal
        .open({
          templateUrl: 'login_modal.html',
          backdrop: 'static',
          keyboard: false,
          controller: 'loginController'
        });
    });

    self.init = init;
    self.create = create;
    self.login = login;
    self.logout = logout;
    self.props = {
      get: getProp,
      set: setProp
    };

    return self;

    function init() {
      var
        token = $window.localStorage.nl_token;

      if (token) {
        return $http.get('/api/sessions', { headers: { token: $window.localStorage.nl_token }})
          .then(setUserFromResponse);
      }
      else {
        return self;
      }
    }

    function create(userParams) {
      return $auth.signup(userParams);
    }

    function login(credentials) {
      return $auth.login(credentials)
        .then(setUserFromResponse)
        .then(confirmLogin);

      function confirmLogin() {
        authService.loginConfirmed();
      }
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
      return self;
    }

    function clear() {
      userStore = {};
    }
  }

})(angular);