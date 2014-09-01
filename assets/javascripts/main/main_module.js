(function(angular) {

  var
    dependencies;

  dependencies = [
    'nl.Templates',
    'nl.States',
    'nl.Auth',
    'nl.Login',
    'nl.Signup',
    'nl.Dashboard'
  ];

  angular.module('nl.Main', dependencies);

})(angular);