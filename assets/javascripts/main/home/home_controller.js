(function(angular) {

  var
    definitions;

  definitions = [
    '$scope',
    homeController
  ];

  angular.module('nl.Home')
    .controller('homeController', definitions);

  function homeController($scope) {

  }

})(angular);