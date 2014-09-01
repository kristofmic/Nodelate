(function(angular) {

  var
    dependencies,
    runDefinitions;

  dependencies = [
    'ui.router'
  ];

  runDefinitions = [
    '$rootScope',
    '$state',
    authRun
  ];

  angular.module('nl.Auth', dependencies)
    .run(runDefinitions);

  function authRun($rootScope, $state) {
    $rootScope.$on('$stateChangeStart', authorizeState);

    function authorizeState(e, toState, toParams) {
      if (toState.data.auth) {
        e.preventDefault();
        $state.go('main.public.login');
      }
    }
  }

})(angular);