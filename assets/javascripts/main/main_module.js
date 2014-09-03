(function(angular) {

  var
    dependencies;

  dependencies = [
    'ng-token-auth',
    'nl.Templates',
    'nl.States',
    'nl.Home',
    'nl.Session',
    'nl.Signup',
    'nl.Dashboard'
  ];

  angular.module('nl.Main', dependencies)
    .config(configAuth);

  function configAuth($authProvider) {
    $authProvider.configure({
      apiUrl: '/api',
      tokenValidationPath: '/sessions/validate', // GET
      signOutUrl: '/sessions', // DELETE
      emailSignInPath: '/sessions', // POST
      emailRegistrationPath: '/users', // POST
      storage: 'cookies',
      tokenFormat: {
        'access-token': '{{ token }}',
        'token-type':   'Bearer',
        'client':       '{{ clientId }}',
        'expiry':       '{{ expiry }}',
        'uid':          '{{ uid }}'
      },
      parseExpiry: function(headers) {
        // convert from UTC ruby (seconds) to UTC js (milliseconds)
        return (parseInt(headers['expiry']) * 1000) || null;
      },
      handleLoginResponse: function(response) {
        return response;
      },
      handleAccountResponse: function(response) {
        return response.data;
      },
      handleTokenValidationResponse: function(response) {
        return response.data;
      }
    });
  }

})(angular);