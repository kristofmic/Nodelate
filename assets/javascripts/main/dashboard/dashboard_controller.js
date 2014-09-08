(function(angular) {

  var
    definitions;

  definitions = [
    '$scope',
    dashboardController
  ];

  angular.module('nl.Dashboard')
    .controller('dashboardController', definitions);

  function dashboardController($scope) {
  }

})(angular);