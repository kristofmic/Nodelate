(function(angular) {

  var
    definitions;

  definitions = [
    '$scope',
    '$state',
    'user',
    'snackbar',
    'VALIDATION_EVENT',
    '$modalInstance',
    loginController
  ];

  angular.module('nl.Session')
    .controller('loginController', definitions);

  function loginController($scope, $state, user, snackbar, VALIDATION_EVENT, modal) {
    $scope.submit = submit;

    function submit(loginForm, email, password) {
      $scope.$broadcast(VALIDATION_EVENT.VALIDATE);

      if (loginForm.$valid) {
        user.login({
          email: email,
          password: password
        })
        ['catch'](handleError);
      }

      function handleError(err) {
        snackbar.error(angular.fromJson(err.data));
      }
    }
  }

})(angular);