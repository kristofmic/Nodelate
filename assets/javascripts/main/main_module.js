(function(angular) {

  var
    dependencies;

  dependencies = [
    'nl.Templates',
    'nl.States',
    'nl.Auth',
    'nl.Home',
    'nl.Session',
    'nl.Signup',
    'nl.Dashboard'
  ];

  angular.module('nl.Main', dependencies);

})(angular);