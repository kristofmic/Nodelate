(function(angular) {
  var
    definition;

  definition = [
    '$stateProvider',
    '$urlRouterProvider',
    statesConfig
  ];

  angular.module('nl.States')
    .config(definition);

  function statesConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider
      .otherwise('/login');

    $stateProvider
      .state('main', {
        abstract: true,
        templateUrl: 'main.html',
        controller: 'mainController'
      })

      .state('main.public', {
        abstract: true,
        views: {
          'header': {
            templateUrl: 'mkt_header.html'
          },
          '': {
            template: '<div ui-view></div>'
          }
        },
        data: { auth: false }
      })
      .state('main.public.login', {
        url: '/login',
        templateUrl: 'login.html',
        controller: 'loginController'
      })
      .state('main.public.signup', {
        url: '/signup',
        templateUrl: 'signup.html',
        controller: 'signupController'
      })

      .state('main.private', {
        abstract: true,
        views: {
          'header': {
            templateUrl: 'dash_header.html'
          },
          '': {
            template: '<div ui-view></div>'
          }
        },
        data: { auth: true }
      })
      .state('main.private.logout', {
        url: '/logout',
        controller: 'logoutController'
      })
      .state('main.private.dashboard', {
        url: '/dashboard',
        templateUrl: 'dashboard.html',
        controller: 'dashboardController'
      });
  }

})(angular);