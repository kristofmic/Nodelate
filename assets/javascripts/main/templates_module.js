angular.module('nl.Templates', []).run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('dash_header.html',
    "<nav class=\"navbar navbar-inverse navbar-static-top\" role=\"navigation\"><div class=\"container\"><div class=\"navbar-header\"><button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#nav-links\"><span class=\"sr-only\">Toggle navigation</span> <span class=\"icon-bar\"></span> <span class=\"icon-bar\"></span> <span class=\"icon-bar\"></span></button> <a class=\"navbar-brand\" href=\"/\">Nodelate App</a></div><div class=\"collapse navbar-collapse\" id=\"nav-links\"><ul class=\"nav navbar-nav navbar-right\"><li><a ui-sref=\"main.private.logout\">Log Out</a></li></ul></div></div></nav>"
  );


  $templateCache.put('dashboard.html',
    "<h1>I'm dashboard!</h1>"
  );


  $templateCache.put('login.html',
    "<h1>I'm login!</h1>"
  );


  $templateCache.put('main.html',
    "<div ui-view=\"header\"></div><div class=\"container\" ui-view></div>"
  );


  $templateCache.put('mkt_header.html',
    "<nav class=\"navbar navbar-default navbar-static-top\" role=\"navigation\"><div class=\"container\"><div class=\"navbar-header\"><button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#nav-links\"><span class=\"sr-only\">Toggle navigation</span> <span class=\"icon-bar\"></span> <span class=\"icon-bar\"></span> <span class=\"icon-bar\"></span></button> <a class=\"navbar-brand\" ui-sref=\"main.private.dashboard\">Nodelate</a></div><div class=\"collapse navbar-collapse\" id=\"nav-links\"><ul class=\"nav navbar-nav navbar-right\"><li><a ui-sref=\"main.public.login\">Log In</a></li><li><a ui-sref=\"main.public.signup\">Join Now</a></li></ul></div></div></nav>"
  );


  $templateCache.put('signup.html',
    "<h1>I'm signup!</h1>"
  );

}]);
