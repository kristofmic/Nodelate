(function(angular) {

  var
    definitions;

  definitions = [
    '$scope',
    mainController
  ];

  angular.module('nl.Main')
    .controller('mainController', definitions);

  function mainController($scope) {
    console.log('Main loaded!');
  }

})(angular);