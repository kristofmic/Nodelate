(function(angular) {

  var
    definitions;

  definitions = [
    '$scope',
    '$state',
    '$stateParams',
    '$http',
    'snackbar',
    emailVerificationController
  ];

  angular.module('nl.Session')
    .controller('emailVerificationController', definitions);

  function emailVerificationController($scope, $state, $stateParams, $http, snackbar) {
    $http.put('/api/users/verify_email', { verificationToken: $stateParams.verificationToken })
      .then(handleSuccess)
      ['catch'](handleError);

    function handleSuccess(res) {
      snackbar.success('Thank you for verifying your email! You may now login.');
      $state.go('main.public.login', null, { location: 'replace' });
    }

    function handleError(err) {
      snackbar.error(angular.fromJson(err.data));
      $state.go('main.public.login', null, { location: 'replace' });
    }
  }

})(angular);