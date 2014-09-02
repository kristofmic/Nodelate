(function(angular) {

  var
    definitions;

  definitions = [
    '$scope',
    'auth',
    mainController
  ];

  angular.module('nl.Main')
    .controller('mainController', definitions);

  function mainController($scope, auth) {
    $scope.isAuthenticated = auth.isAuthenticated;
  }

})(angular);