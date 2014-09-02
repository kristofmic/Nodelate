(function(angular) {

  var
    definitions;

  definitions = [
    '$cookieStore',
    '$http',
    authFactory
  ];

  angular.module('nl.Auth')
    .factory('auth', definitions);

  function authFactory($cookieStore, $http) {
    var
      self = {},
      authenticated = false;

    self.setSession = setSession;
    self.login = login;
    self.logout = logout;
    self.isAuthenticated = isAuthenticated;

    return self;

    function setSession(token) {
      if (token) {
        $cookieStore.put('nl.token', token);
        authenticated = true;
      }
    }

    function login(userParams) {
      var
        credentials;

      credentials = {
        email: userParams.email,
        password: userParams.password
      };

      return $http.post('/api/sessions', credentials)
        .then(setToken);

      function setToken(res) {
        setSession(res.data.token);
        return res;
      }
    }

    function logout() {
      // TODO: Send server update to logout as well
      $cookieStore.remove('nl.token');
      authenticated = false;
    }

    function isAuthenticated() {
      if (!authenticated) {
        // TODO: Verify the token is valid w/ server
        authenticated = !!$cookieStore.get('nl.token');
      }

      return authenticated;
    }
  }

})(angular);