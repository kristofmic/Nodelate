angular.module('nl.Templates', []).run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('dash_header.html',
    "<nav class=\"navbar navbar-inverse navbar-static-top\" role=\"navigation\"><div class=\"container\"><div class=\"navbar-header\"><button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#nav-links\"><span class=\"sr-only\">Toggle navigation</span> <span class=\"icon-bar\"></span> <span class=\"icon-bar\"></span> <span class=\"icon-bar\"></span></button> <a class=\"navbar-brand\" href=\"/\">Nodelate App</a></div><div class=\"collapse navbar-collapse\" id=\"nav-links\"><ul class=\"nav navbar-nav navbar-right\"><li><a ui-sref=\"main.private.logout\">Log Out</a></li></ul></div></div></nav>"
  );


  $templateCache.put('dashboard.html',
    "<h1>I'm dashboard!</h1>"
  );


  $templateCache.put('home.html',
    "<h1>I'm home!</h1>"
  );


  $templateCache.put('login.html',
    "<div class=\"row\"><div class=\"col-sm-8 col-sm-offset-2\"><h2><small>Login</small></h2></div></div><div class=\"row\"><div class=\"col-sm-8 col-sm-offset-2\"><div class=\"panel panel-default\"><div class=\"panel-body\"><form name=\"loginForm\" class=\"form-horizontal\" ng-submit=\"submit()\" novalidate><div class=\"form-group\"><label for=\"email\" class=\"control-label sr-only\">Email Address</label><div class=\"col-sm-10 col-sm-offset-1\"><input type=\"email\" id=\"email\" name=\"email\" class=\"form-control\" placeholder=\"Email address\" ng-model=\"email\" ch-validator=\"required email\"></div></div><div class=\"form-group\"><label for=\"password\" class=\"control-label sr-only\">Password</label><div class=\"col-sm-10 col-sm-offset-1\"><input type=\"password\" id=\"password\" name=\"password\" class=\"form-control\" placeholder=\"Password\" ng-model=\"password\" ch-validator=\"required password\"></div></div><div class=\"form-group\"><div class=\"col-sm-10 col-sm-offset-1\"><button type=\"submit\" class=\"btn btn-success\">Login</button></div></div><div class=\"form-group\"><div class=\"col-sm-5 col-sm-offset-2\"><button type=\"button\" class=\"btn btn-link\">Forgot password</button></div></div></form></div></div></div></div>"
  );


  $templateCache.put('main.html',
    "<div ui-view=\"header\"></div><div class=\"container\" ui-view></div>"
  );


  $templateCache.put('mkt_header.html',
    "<nav class=\"navbar navbar-default navbar-static-top\" role=\"navigation\"><div class=\"container\"><div class=\"navbar-header\"><button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#nav-links\"><span class=\"sr-only\">Toggle navigation</span> <span class=\"icon-bar\"></span> <span class=\"icon-bar\"></span> <span class=\"icon-bar\"></span></button> <a class=\"navbar-brand\" href=\"/\">Nodelate</a></div><div class=\"collapse navbar-collapse\" id=\"nav-links\"><ul class=\"nav navbar-nav navbar-right\" ng-switch=\"isAuthenticated()\"><li ng-switch-when=\"false\"><a ui-sref=\"main.public.login\">Log In</a></li><li ng-switch-when=\"false\"><a ui-sref=\"main.public.signup\">Sign Up</a></li><li ng-switch-when=\"true\"><a ui-sref=\"main.private.logout\">Log Out</a></li></ul></div></div></nav>"
  );


  $templateCache.put('signup.html',
    "<div class=\"row\"><div class=\"col-sm-8 col-sm-offset-2\"><h2><small>Sign up</small></h2></div></div><div class=\"row\"><div class=\"col-sm-8 col-sm-offset-2\"><div class=\"panel panel-default\"><div class=\"panel-body\"><form name=\"signupForm\" class=\"form-horizontal\" ng-submit=\"submit()\" novalidate><div class=\"form-group\"><label for=\"email\" class=\"control-label sr-only\">Email Address</label><div class=\"col-sm-10 col-sm-offset-1\"><input type=\"email\" id=\"email\" name=\"email\" class=\"form-control\" placeholder=\"Email address\" ng-model=\"email\" ch-validator=\"required email\"></div></div><div class=\"form-group\"><label for=\"password\" class=\"control-label sr-only\">Password</label><div class=\"col-sm-10 col-sm-offset-1\"><input type=\"password\" id=\"password\" name=\"password\" class=\"form-control\" placeholder=\"Password\" ng-model=\"password\" ch-validator=\"required password\"></div></div><div class=\"form-group\"><label for=\"passwordConfirmation\" class=\"control-label sr-only\">Password Confirmation</label><div class=\"col-sm-10 col-sm-offset-1\"><input type=\"password\" id=\"passwordConfirmation\" name=\"passwordConfirmation\" class=\"form-control\" placeholder=\"Re-enter Password\" ng-model=\"passwordConfirmation\" ch-validator=\"required password confirm:password\"></div></div><div class=\"form-group\"><div class=\"col-sm-10 col-sm-offset-1\"><button type=\"submit\" class=\"btn btn-success\">Signup</button></div></div><div class=\"form-group\"><div class=\"col-sm-5 col-sm-offset-2\"><a class=\"btn btn-link\" ui-sref=\"main.public.login\">Log in</a></div></div></form></div></div></div></div>"
  );

}]);
