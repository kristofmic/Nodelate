(function(angular) {

  var
    definitions;

  definitions = [
    '$scope',
    '$state',
    '$modal',
    'user',
    'snackbar',
    'VALIDATION_EVENT',
    loginController
  ];

  angular.module('nl.Session')
    .controller('loginController', definitions);

  function loginController($scope, $state, $modal, user, snackbar, VALIDATION_EVENT) {
    $scope.submit = submit;
    $scope.forgotPassword = forgotPassword;

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

    function forgotPassword() {
      var
        modalConfig;

      modalConfig = {
        templateUrl: 'forgot_password_modal.html',
        backdrop: true,
        keyboard: true,
        controller: 'forgotPasswordModalController'
      };

      $modal.open(modalConfig);
    }
  }

})(angular);