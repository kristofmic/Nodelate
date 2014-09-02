(function(angular) {

  var
    definitions;

  definitions = [
    '$scope',
    '$state',
    'snackbar',
    'auth',
    logoutController
  ];

  angular.module('nl.Session')
    .controller('logoutController', definitions);

  function logoutController($scope, $state, snackbar, auth) {
    auth.logout();
    snackbar.success('Successfully logged out');
    $state.go('main.public.login', null, { location: 'replace' });
  }

})(angular);