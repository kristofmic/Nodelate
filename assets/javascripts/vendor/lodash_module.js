(function(angular) {

  var
    dependencies = [],
    factoryDefinition;

  factoryDefinition = [
    '$window',
    lodash
  ];

  angular.module('nl.Vendor.LoDash', dependencies)
    .factory('_', factoryDefinition);

  function lodash($window) { return $window._; }

})(angular);