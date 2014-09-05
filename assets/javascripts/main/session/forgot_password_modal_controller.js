(function(angular) {

  var
    definitions;

  definitions = [
    '$scope',
    '$state',
    '$http',
    'snackbar',
    '$modalInstance',
    forgotPasswordModalController
  ];

  angular.module('nl.Session')
    .controller('forgotPasswordModalController', definitions);

  function forgotPasswordModalController($scope, $state, $http, snackbar, modal) {
    $scope.submit = submit;
    $scope.dismiss = modal.dismiss;

    function submit(email) {
      if (email) {
        $http.post('/api/sessions/forgot_password', { email: email })
          .then(handleSuccess)
          .then(modal.close)
          ['catch'](handleError);
      }

      function handleSuccess(res) {
        snackbar.success(angular.fromJson(res.data));
      }

      function handleError(err) {
        snackbar.error(angular.fromJson(err.data));
      }
    }
  }

})(angular);