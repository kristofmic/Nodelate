(function(angular) {

  var
    definitions;

  definitions = [
    '$scope',
    feedsController
  ];

  angular.module('nl.Feeds')
    .controller('feedsController', definitions);

  function feedsController($scope) {
  }

})(angular);