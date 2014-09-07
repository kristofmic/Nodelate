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
    loginModalController
  ];

  angular.module('nl.Session')
    .controller('loginModalController', definitions);

  function loginModalController($scope, $state, user, snackbar, VALIDATION_EVENT, modal) {
    $scope.credentials = {};
    $scope.submit = submit;
    $scope.dismiss = dismiss;

    function submit(loginForm, email, password) {
      $scope.$broadcast(VALIDATION_EVENT.VALIDATE);

      if (loginForm.$valid) {
        user.login($scope.credentials)
          .then(modal.close)
          ['catch'](handleError);
      }

      function handleError(err) {
        snackbar.error(angular.fromJson(err.data));
      }
    }

    function dismiss() {
      user.logout();
      modal.dismiss();
      $state.go('main.public.login');
    }
  }

})(angular);