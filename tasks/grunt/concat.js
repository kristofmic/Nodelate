module.exports = {
  components: {
    src: [
      '<%= componentsPath %>/angular/angular.js',
      '<%= componentsPath %>/angular-touch/angular-touch.js',
      '<%= componentsPath %>/angular-ui-router/release/angular-ui-router.js',
      '<%= componentsPath %>/angular-http-auth/src/http-auth-interceptor.js',
      '<%= componentsPath %>/satellizer/satellizer.js',
      '<%= componentsPath %>/angular-bootstrap/ui-bootstrap-tpls.js',
      '<%= componentsPath %>/lodash/dist/lodash.js',
      '<%= componentsPath %>/chSnackbar/dist/chSnackbar.js',
      '<%= componentsPath %>/chValidator/dist/chValidator.js'
    ],
    dest: '<%= pubJsPath %>/components.js'
  },
  main: {
    options: {
      process: function(src, filepath) {
        return '\n// ' + filepath + '\n' + src;
      }
    },
    src: [
      '<%= jsPath %>/vendor/**/*.js',
      '<%= jsPath %>/main/auth/auth_module.js',
      '<%= jsPath %>/main/auth/*.js',
      '<%= jsPath %>/main/user/user_module.js',
      '<%= jsPath %>/main/user/*.js',
      '<%= jsPath %>/main/home/home_module.js',
      '<%= jsPath %>/main/home/*.js',
      '<%= jsPath %>/main/session/session_module.js',
      '<%= jsPath %>/main/session/*.js',
      '<%= jsPath %>/main/signup/signup_module.js',
      '<%= jsPath %>/main/signup/*.js',
      '<%= jsPath %>/main/dashboard/dashboard_module.js',
      '<%= jsPath %>/main/dashboard/*.js',
      '<%= jsPath %>/main/states/states_module.js',
      '<%= jsPath %>/main/states/*.js',
      '<%= jsPath %>/main/templates_module.js',
      '<%= jsPath %>/main/main_module.js',
      '<%= jsPath %>/main/**/*.js',
    ],
    dest: '<%= pubJsPath %>/main.js'
  }
};
