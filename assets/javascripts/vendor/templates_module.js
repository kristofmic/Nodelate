angular.module('nl.Vendor.Templates', []).run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('assets/templates/vendor/backdrop.html',
    "<div class=\"modal-backdrop fade\" ng-class=\"{in: animate}\" ng-style=\"{'z-index': 1040 + (index && 1 || 0) + index*10}\"></div>"
  );


  $templateCache.put('assets/templates/vendor/window.html',
    "<div tabindex=\"-1\" role=\"dialog\" class=\"modal fade\" ng-class=\"{in: animate}\" ng-style=\"{'z-index': 1050 + index*10, display: 'block'}\" ng-click=\"close($event)\"><div class=\"modal-dialog\" ng-class=\"{'modal-sm': size == 'sm', 'modal-lg': size == 'lg'}\"><div class=\"modal-content\" ng-transclude></div></div></div>"
  );

}]);
