(function(angular) {

  var
    definitions;

  definitions = [
    '$http',
    'auth',
    userFactory
  ];

  angular.module('nl.User')
    .factory('user', definitions);

  function userFactory($http, auth) {
    var
      self = {},
      userStore;

    self.create = create;

    return self;

    function create(userParams) {
      var
        newUser;

      newUser = {
        email: userParams.email,
        password: userParams.password,
        passwordConfirmation: userParams.passwordConfirmation
      };

      return $http.post('/api/users', newUser)
        .then(setToken)
        .then(setUser);

      function setToken(res) {
        auth.setSession(res.data.apitoken);
        return res;
      }

      function setUser(res) {
        userStore = res;
        return self;
      }
    }
  }

})(angular);