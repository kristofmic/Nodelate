(function(angular) {

  var
    dependencies;

  dependencies = [
    'ui.router',
    'ui.bootstrap',
    'ch.Validator',
    'ch.Snackbar',
    'nl.User'
  ];

  angular.module('nl.Session', dependencies);

})(angular);