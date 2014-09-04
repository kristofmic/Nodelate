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

    $rootScope.$on('event:auth-loginRequired', verifyLogin);

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
        token = getToken();

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
    }

    function logout() {
      var
        token = getToken();

      if (token) {
        $http.delete('/api/sessions', { headers: { token: token }});
      }

      clear();
      $auth.logout();
    }

    function verifyLogin(e, res) {
      var
        modalConfig;

      modalConfig = {
        templateUrl: 'login_modal.html',
        backdrop: 'static',
        keyboard: false,
        controller: 'loginModalController'
      };

      $modal.open(modalConfig);
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

    function confirmLogin() {
      authService.loginConfirmed(null, updateConfig);

      function updateConfig(httpConfig) {
        httpConfig.headers.token = getToken();
        return httpConfig;
      }
    }

    function clear() {
      userStore = {};
    }

    function getToken() {
      return $window.localStorage.nl_token;
    }
  }

})(angular);