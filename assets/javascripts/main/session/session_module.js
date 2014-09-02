(function(angular) {

  var
    dependencies;

  dependencies = [
    'ui.router',
    'ch.Validator',
    'ch.Snackbar',
    'nl.Auth'
  ];

  angular.module('nl.Session', dependencies);

})(angular);