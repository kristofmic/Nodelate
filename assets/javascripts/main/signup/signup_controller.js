(function(angular) {

  var
    definitions;

  definitions = [
    '$scope',
    '$state',
    'VALIDATION_EVENT',
    'snackbar',
    'user',
    signupController
  ];

  angular.module('nl.Signup')
    .controller('signupController', definitions);

  function signupController($scope, $state, VALIDATION_EVENT, snackbar, user) {
    $scope.credentials = {};
    $scope.submit = submit;

    function submit() {
      $scope.$broadcast(VALIDATION_EVENT.VALIDATE);

      if ($scope.signupForm.$valid) {
        snackbar.loading('Processing. Please wait.');

        user.create($scope.credentials)
        .then(handleSuccess)
        ['catch'](handleError);
      }

      function handleSuccess() {
        snackbar.success('An email has been sent to your address for verification. Please verify before logging in.');
      }

      function handleError(err) {
        snackbar.error(angular.fromJson(err.data));
      }
    }
  }

})(angular);