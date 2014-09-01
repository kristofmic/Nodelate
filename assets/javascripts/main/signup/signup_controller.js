(function(angular) {

  var
    definitions;

  definitions = [
    '$scope',
    signupController
  ];

  angular.module('nl.Signup')
    .controller('signupController', definitions);

  function signupController($scope) {
    console.log('Signup loaded!');
  }

})(angular);