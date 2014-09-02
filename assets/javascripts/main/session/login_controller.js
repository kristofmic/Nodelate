(function(angular) {

  var
    definitions;

  definitions = [
    '$scope',
    '$state',
    'VALIDATION_EVENT',
    'snackbar',
    'auth',
    loginController
  ];

  angular.module('nl.Session')
    .controller('loginController', definitions);

  function loginController($scope, $state, VALIDATION_EVENT, snackbar, auth) {
    $scope.submit = submit;

    function submit() {
      $scope.$broadcast(VALIDATION_EVENT.VALIDATE);

      if ($scope.loginForm.$valid) {
        auth.login({
          email: $scope.email,
          password: $scope.password
        })
        .then(nextState)
        ['catch'](handleError);
      }

      function nextState() {
        $state.go('main.private.dashboard');
      }

      function handleError(err) {
        snackbar.error(angular.fromJson(err.data));
      }
    }
  }

})(angular);