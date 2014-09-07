(function(angular) {

  var
    definitions;

  definitions = [
    '$scope',
    '$state',
    '$stateParams',
    'user',
    'snackbar',
    'VALIDATION_EVENT',
    forgotPasswordController
  ];

  angular.module('nl.Session')
    .controller('forgotPasswordController', definitions);

  function forgotPasswordController($scope, $state, $stateParams, user, snackbar, VALIDATION_EVENT) {
    $scope.submit = submit;

    function submit() {
      $scope.$broadcast(VALIDATION_EVENT.VALIDATE);

      if ($scope.forgotPasswordForm.$valid) {
        user.resetPassword({
          resetToken: $stateParams.resetToken,
          password: $scope.password
        })
        .then(handleSuccess)
        ['catch'](handleError);
      }

      function handleSuccess(res) {
        snackbar.success('Your password has been reset. You may now login.');
        $state.go('main.public.login', null, { location: 'replace' });
      }

      function handleError(err) {
        snackbar.error(angular.fromJson(err.data));
      }
    }
  }

})(angular);