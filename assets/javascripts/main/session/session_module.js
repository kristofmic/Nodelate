(function(angular) {

  var
    dependencies;

  dependencies = [
    'ui.router',
    'ch.Validator',
    'ch.Snackbar',
    'nl.User'
  ];

  angular.module('nl.Session', dependencies);

})(angular);