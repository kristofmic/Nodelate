(function(angular) {

  var
    definitions;

  definitions = [
    '$scope',
    '$state',
    '$auth',
    'VALIDATION_EVENT',
    'snackbar',
    loginController
  ];

  angular.module('nl.Session')
    .controller('loginController', definitions);

  function loginController($scope, $state, $auth, VALIDATION_EVENT, snackbar) {
    $scope.submit = submit;

    function submit() {
      $scope.$broadcast(VALIDATION_EVENT.VALIDATE);

      if ($scope.loginForm.$valid) {
        $auth.login({
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