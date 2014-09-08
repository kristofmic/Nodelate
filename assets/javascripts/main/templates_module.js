angular.module('nl.Templates', []).run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('account.html',
    "<div class=\"row\"><div class=\"col-sm-6\"><h2><small>{{user.get('email')}}</small></h2></div><div class=\"col-sm-6\"><p class=\"text-right\"><small>Member since: {{user.get('createdAt') | date:'mediumDate'}}</small></p></div></div><div class=\"divider\"></div><div class=\"row\"><div class=\"col-sm-12\"><div class=\"col-md-2 hidden-sm hidden-xs\"><h5>Password</h5></div><div class=\"col-sm-2\"><button class=\"btn btn-link\" ng-click=\"changePassword = !changePassword\">Change password</button></div><div class=\"col-md-8 col-sm-10\"><form class=\"form-inline\" role=\"form\" name=\"passwordForm\" novalidate ng-show=\"changePassword\" ng-submit=\"submit(passwordForm, credentials)\"><div class=\"form-group\"><label class=\"sr-only\" for=\"password\">Current password</label><input type=\"password\" class=\"form-control\" id=\"password\" placeholder=\"Current password\" ng-model=\"credentials.password\" ch-validator=\"required password\"></div><div class=\"form-group\"><label class=\"sr-only\" for=\"newPassword\">New password</label><input type=\"password\" class=\"form-control\" id=\"newPassword\" placeholder=\"New password\" ng-model=\"credentials.newPassword\" ch-validator=\"required password\"></div><div class=\"form-group\"><label class=\"sr-only\" for=\"newPasswordConfirmation\">Password confirmation</label><input type=\"password\" class=\"form-control\" id=\"newPasswordConfirmation\" placeholder=\"Password confirmation\" ng-model=\"newPasswordConfirmation\" ch-validator=\"required password confirm:credentials.newPassword\"></div><button type=\"submit\" class=\"btn btn-default\">Change</button></form></div></div></div>"
  );


  $templateCache.put('dashboard.html',
    "<h1>Feeds go here</h1>"
  );


  $templateCache.put('home.html',
    "<h1>I'm home!</h1>"
  );


  $templateCache.put('main.html',
    "<div ui-view=\"header\"></div><div class=\"container\" ui-view></div>"
  );


  $templateCache.put('dash_header.html',
    "<nav class=\"navbar navbar-default navbar-static-top\" role=\"navigation\"><div class=\"container\"><div class=\"navbar-header\"><button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#nav-links\"><span class=\"sr-only\">Toggle navigation</span> <span class=\"icon-bar\"></span> <span class=\"icon-bar\"></span> <span class=\"icon-bar\"></span></button> <a class=\"navbar-brand\" href=\"/\">Nodelate</a></div><div class=\"collapse navbar-collapse\" id=\"nav-links\"><ul class=\"nav navbar-nav navbar-right\"><li><a ui-sref=\"main.private.dashboard\">Dashboard</a></li><li><a ui-sref=\"main.private.account\">Account</a></li><li><a ui-sref=\"main.private.logout\">Logout</a></li><li><p class=\"navbar-text\">{{user.get('email')}}</p></li></ul></div></div></nav>"
  );


  $templateCache.put('mkt_header.html',
    "<nav class=\"navbar navbar-default navbar-static-top\" role=\"navigation\"><div class=\"container\"><div class=\"navbar-header\"><button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#nav-links\"><span class=\"sr-only\">Toggle navigation</span> <span class=\"icon-bar\"></span> <span class=\"icon-bar\"></span> <span class=\"icon-bar\"></span></button> <a class=\"navbar-brand\" href=\"/\">Nodelate</a></div><div class=\"collapse navbar-collapse\" id=\"nav-links\"><ul class=\"nav navbar-nav navbar-right\" ng-switch=\"isAuthenticated()\"><li ng-switch-when=\"false\"><a ui-sref=\"main.public.login\">Log In</a></li><li ng-switch-when=\"false\"><a ui-sref=\"main.public.signup\">Sign Up</a></li><li ng-switch-when=\"true\"><a ui-sref=\"main.private.dashboard\">Dashboard</a></li><li ng-switch-when=\"true\"><a ui-sref=\"main.private.logout\">Log Out</a></li></ul></div></div></nav>"
  );


  $templateCache.put('forgot_password.html',
    "<div class=\"row\"><div class=\"col-sm-8 col-sm-offset-2\"><h2><small>Enter a new password</small></h2></div></div><div class=\"row\"><div class=\"col-sm-8 col-sm-offset-2\"><div class=\"panel panel-default\"><div class=\"panel-body\"><form name=\"forgotPasswordForm\" class=\"form-horizontal\" ng-submit=\"submit(forgotPasswordForm, password)\" novalidate><div class=\"form-group\"><label for=\"password\" class=\"control-label sr-only\">Password</label><div class=\"col-sm-10 col-sm-offset-1\"><input type=\"password\" id=\"password\" name=\"password\" class=\"form-control\" placeholder=\"Password\" ng-model=\"password\" ch-validator=\"required password\"></div></div><div class=\"form-group\"><label for=\"passwordConfirmation\" class=\"control-label sr-only\">Password Confirmation</label><div class=\"col-sm-10 col-sm-offset-1\"><input type=\"password\" id=\"passwordConfirmation\" name=\"passwordConfirmation\" class=\"form-control\" placeholder=\"Re-enter Password\" ng-model=\"passwordConfirmation\" ch-validator=\"required password confirm:password\"></div></div><div class=\"form-group\"><div class=\"col-sm-10 col-sm-offset-1\"><button type=\"submit\" class=\"btn btn-success\">Reset</button></div></div><div class=\"form-group\"><div class=\"col-sm-5 col-sm-offset-1\"><a class=\"btn btn-link\" ui-sref=\"main.public.login\">Log in</a></div></div></form></div></div></div></div>"
  );


  $templateCache.put('forgot_password_modal.html',
    "<div class=\"modal-header\"><h4 class=\"modal-title\">Please enter your email address</h4></div><div class=\"modal-body\"><form name=\"forgotPasswordForm\" class=\"form-horizontal\" ng-submit=\"submit(email)\" novalidate><div class=\"form-group\"><label for=\"email\" class=\"control-label sr-only\">Email Address</label><div class=\"col-sm-10 col-sm-offset-1\"><input type=\"email\" id=\"email\" name=\"email\" class=\"form-control\" placeholder=\"Email address\" ng-model=\"email\" ch-validator=\"email\"></div></div><div class=\"form-group\"><div class=\"col-sm-10 col-sm-offset-1\"><button type=\"submit\" class=\"btn btn-success\">Reset</button> <button type=\"button\" class=\"btn btn-default\" ng-click=\"dismiss()\">Cancel</button></div></div></form></div>"
  );


  $templateCache.put('login.html',
    "<div class=\"row\"><div class=\"col-sm-8 col-sm-offset-2\"><h2><small>Login</small></h2></div></div><div class=\"row\"><div class=\"col-sm-8 col-sm-offset-2\"><div class=\"panel panel-default\"><div class=\"panel-body\"><form name=\"loginForm\" class=\"form-horizontal\" ng-submit=\"submit(loginForm, credentials)\" novalidate><div class=\"form-group\"><label for=\"email\" class=\"control-label sr-only\">Email Address</label><div class=\"col-sm-10 col-sm-offset-1\"><input type=\"email\" id=\"email\" name=\"email\" class=\"form-control\" placeholder=\"Email address\" ng-model=\"credentials.email\" ch-validator=\"required email\"></div></div><div class=\"form-group\"><label for=\"password\" class=\"control-label sr-only\">Password</label><div class=\"col-sm-10 col-sm-offset-1\"><input type=\"password\" id=\"password\" name=\"password\" class=\"form-control\" placeholder=\"Password\" ng-model=\"credentials.password\" ch-validator=\"required password\"></div></div><div class=\"form-group\"><div class=\"col-sm-10 col-sm-offset-1\"><button type=\"submit\" class=\"btn btn-success\">Login</button></div></div><div class=\"form-group\"><div class=\"col-sm-5 col-sm-offset-1\"><button type=\"button\" class=\"btn btn-link\" ng-click=\"forgotPassword()\">Forgot password</button></div></div></form></div></div></div></div>"
  );


  $templateCache.put('login_modal.html',
    "<div class=\"modal-header\"><h4 class=\"modal-title\">Please login again to verify your identity</h4></div><div class=\"modal-body\"><form name=\"loginForm\" class=\"form-horizontal\" ng-submit=\"submit(loginForm, email, password)\" novalidate><div class=\"form-group\"><label for=\"email\" class=\"control-label sr-only\">Email Address</label><div class=\"col-sm-10 col-sm-offset-1\"><input type=\"email\" id=\"email\" name=\"email\" class=\"form-control\" placeholder=\"Email address\" ng-model=\"credentials.email\" ch-validator=\"required email\"></div></div><div class=\"form-group\"><label for=\"password\" class=\"control-label sr-only\">Password</label><div class=\"col-sm-10 col-sm-offset-1\"><input type=\"password\" id=\"password\" name=\"password\" class=\"form-control\" placeholder=\"Password\" ng-model=\"credentials.password\" ch-validator=\"required password\"></div></div><div class=\"form-group\"><div class=\"col-sm-10 col-sm-offset-1\"><button type=\"submit\" class=\"btn btn-success\">Login</button> <button type=\"button\" class=\"btn btn-default\" ng-click=\"dismiss()\">Cancel</button></div></div></form></div>"
  );


  $templateCache.put('signup.html',
    "<div class=\"row\"><div class=\"col-sm-8 col-sm-offset-2\"><h2><small>Sign up</small></h2></div></div><div class=\"row\"><div class=\"col-sm-8 col-sm-offset-2\"><div class=\"panel panel-default\"><div class=\"panel-body\"><form name=\"signupForm\" class=\"form-horizontal\" ng-submit=\"submit(signupForm, credentials)\" novalidate><div class=\"form-group\"><label for=\"email\" class=\"control-label sr-only\">Email Address</label><div class=\"col-sm-10 col-sm-offset-1\"><input type=\"email\" id=\"email\" name=\"email\" class=\"form-control\" placeholder=\"Email address\" ng-model=\"credentials.email\" ch-validator=\"required email\"></div></div><div class=\"form-group\"><label for=\"password\" class=\"control-label sr-only\">Password</label><div class=\"col-sm-10 col-sm-offset-1\"><input type=\"password\" id=\"password\" name=\"password\" class=\"form-control\" placeholder=\"Password\" ng-model=\"credentials.password\" ch-validator=\"required password\"></div></div><div class=\"form-group\"><label for=\"passwordConfirmation\" class=\"control-label sr-only\">Password Confirmation</label><div class=\"col-sm-10 col-sm-offset-1\"><input type=\"password\" id=\"passwordConfirmation\" name=\"passwordConfirmation\" class=\"form-control\" placeholder=\"Re-enter Password\" ng-model=\"passwordConfirmation\" ch-validator=\"required password confirm:credentials.password\"></div></div><div class=\"form-group\"><div class=\"col-sm-10 col-sm-offset-1\"><button type=\"submit\" class=\"btn btn-success\">Signup</button></div></div><div class=\"form-group\"><div class=\"col-sm-5 col-sm-offset-1\"><a class=\"btn btn-link\" ui-sref=\"main.public.login\">Log in</a></div></div></form></div></div></div></div>"
  );

}]);
