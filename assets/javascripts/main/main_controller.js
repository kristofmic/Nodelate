(function(angular) {

  var
    definitions;

  definitions = [
    '$scope',
    'isAuthenticated',
    'user',
    mainController
  ];

  angular.module('nl.Main')
    .controller('mainController', definitions);

  function mainController($scope, isAuthenticated, user) {
    $scope.isAuthenticated = isAuthenticated;
    $scope.user = user.props;
  }

})(angular);