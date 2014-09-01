(function(angular) {

  var
    definitions;

  definitions = [
    '$scope',
    loginController
  ];

  angular.module('nl.Login')
    .controller('loginController', definitions);

  function loginController($scope) {
    console.log('Login loaded!');
  }

})(angular);