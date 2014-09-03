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
    self.get = get;

    return self;

    function create(userParams) {
      return $auth.signup(userParams)
        .then(setUser);

      function setUser(res) {
        _.extend(userStore, res.data);
        return self;
      }
    }

    function get(prop) {
      return userStore[prop];
    }
  }

})(angular);