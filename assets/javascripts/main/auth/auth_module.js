(function(angular) {

  var
    dependencies,
    runDefinitions;

  dependencies = [
    'ui.router',
    'ngCookies'
  ];

  runDefinitions = [
    '$rootScope',
    '$state',
    'auth',
    authRun
  ];

  angular.module('nl.Auth', dependencies)
    .run(runDefinitions);

  function authRun($rootScope, $state, auth) {
    $rootScope.$on('$stateChangeStart', authorizeState);

    function authorizeState(e, toState, toParams) {
      if (toState.data.auth && !auth.isAuthenticated()) {
        e.preventDefault();
        $state.go('main.public.login');
      }
    }
  }

})(angular);