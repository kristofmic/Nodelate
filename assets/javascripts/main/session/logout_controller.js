(function(angular) {

  var
    definitions;

  definitions = [
    '$scope',
    '$state',
    '$auth',
    '$http',
    'user',
    'snackbar',
    logoutController
  ];

  angular.module('nl.Session')
    .controller('logoutController', definitions);

  function logoutController($scope, $state, $auth, $http, user, snackbar) {
    $http.delete('/api/sessions', { headers: { token: user.get('token') }});
    $auth.logout();
    snackbar.success('Successfully logged out');
    $state.go('main.public.login', null, { location: 'replace' });
  }

})(angular);