(function(angular) {
  var
    definition,
    runDefinition;

  definition = [
    '$stateProvider',
    '$urlRouterProvider',
    statesConfig
  ];

  runDefinition = [
    '$rootScope',
    '$state',
    'auth',
    unAuthenticatedRedirect
  ];

  angular.module('nl.States')
    .config(definition)
    .run(runDefinition);

  function statesConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider
      .rule(authenticatedRedirect)
      .otherwise('/home');

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
      .state('main.public.home', {
        url: '/home',
        templateUrl: 'home.html',
        controller: 'homeController'
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

  function unAuthenticatedRedirect($rootScope, $state, auth) {
    $rootScope.$on('$stateChangeStart', authorizeState);

    function authorizeState(e, toState) {
      if (toState.data.auth && !auth.isAuthenticated()) {
        e.preventDefault();

      }
    }
  }

  function authenticatedRedirect($injector, $location) {
    var
      path = $location.path(),
      auth = $injector.get('auth'),
      login = '/login',
      signup = '/signup';

    if (auth.isAuthenticated() && redirectPath()) {
      $location.path('/home').replace();
    }

    function redirectPath() {
      return path === login || path === signup;
    }
  }

})(angular);