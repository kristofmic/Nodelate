(function(angular) {

  var
    dependencies;

  dependencies = [
    'ngTouch',
    'satellizer',
    'nl.Templates',
    'nl.States',
    'nl.Home',
    'nl.Session',
    'nl.Signup',
    'nl.Dashboard'
  ];

  angular.module('nl.Main', dependencies)
    .config(configAuth);

  function configAuth($authProvider) {
    $authProvider.signupUrl = '/api/users';
    $authProvider.signupRedirect = '/login';
    $authProvider.loginOnSignup = false;

    $authProvider.loginUrl = '/api/sessions';
    $authProvider.loginRedirect = '/dashboard';

    $authProvider.logoutRedirect = null;

    $authProvider.tokenPrefix = 'nl';
    $authProvider.tokenName = 'token';
  }

})(angular);