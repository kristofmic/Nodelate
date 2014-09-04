(function(angular) {

  var
    definitions;

  definitions = [
    '$scope',
    '$state',
    'user',
    'snackbar',
    'VALIDATION_EVENT',
    loginController
  ];

  angular.module('nl.Session')
    .controller('loginController', definitions);

  function loginController($scope, $state, user, snackbar, VALIDATION_EVENT) {
    $scope.submit = submit;

    function submit() {
      $scope.$broadcast(VALIDATION_EVENT.VALIDATE);

      if ($scope.loginForm.$valid) {
        user.login({
          email: $scope.email,
          password: $scope.password
        })
        ['catch'](handleError);
      }

      function handleError(err) {
        snackbar.error(angular.fromJson(err.data));
      }
    }
  }

})(angular);