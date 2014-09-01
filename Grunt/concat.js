module.exports = {
  components: {
    src: [
      '<%= componentsPath %>/angular/angular.js',
      '<%= componentsPath %>/angular-ui-router/release/angular-ui-router.js',
      '<%= componentsPath %>/angular-cookies/angular-cookies.js',
      '<%= componentsPath %>/lodash/dist/lodash.js'
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
      '<%= jsPath %>/shared/**/*.js',
      '<%= jsPath %>/main/states/states_module.js',
      '<%= jsPath %>/main/states/*.js',
      '<%= jsPath %>/main/main_module.js',
      '<%= jsPath %>/main/**/*.js',
    ],
    dest: '<%= pubJsPath %>/main.js'
  }
};
