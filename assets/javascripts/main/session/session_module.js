(function(angular) {

  var
    dependencies;

  dependencies = [
    'ui.router',
    'satellizer',
    'ch.Validator',
    'ch.Snackbar',
    'nl.User'
  ];

  angular.module('nl.Session', dependencies);

})(angular);