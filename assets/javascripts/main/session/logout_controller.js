(function(angular) {

  var
    definitions;

  definitions = [
    '$scope',
    '$state',
    'user',
    'snackbar',
    logoutController
  ];

  angular.module('nl.Session')
    .controller('logoutController', definitions);

  function logoutController($scope, $state, user, snackbar) {
    user.logout();

    snackbar.success('Successfully logged out.');

    $state.go('main.public.login', null, { location: 'replace' });
  }

})(angular);