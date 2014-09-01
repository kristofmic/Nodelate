module.exports = gruntConfig;

function gruntConfig(grunt) {
  var pkg = grunt.file.readJSON('package.json');

  grunt.initConfig({
    jsPath: 'assets/javascripts',
    componentsPath: 'assets/components',
    cssPath: 'assets/stylesheets',
    htmlPath: 'assets/templates',
    imagePath: 'assets/images',
    pubJsPath: 'public/javascripts',
    pubCssPath: 'public/stylesheets',
    pubImagePath: 'public/images',
    pubFontPath: 'public/fonts',

    concat: require('./grunt/concat'),
    watch: require('./grunt/watch'),
    copy: require('./grunt/copy'),
    sass: require('./grunt/sass'),
    ngtemplates: require('./grunt/ngtemplates'),
    uglify: require('./grunt/uglify'),
    bgShell: require('./grunt/bgShell')
  });

  for (var task in pkg.devDependencies) {
    if (task !== 'grunt' && !task.indexOf('grunt')) {
      grunt.loadNpmTasks(task);
    }
  }

  grunt.registerTask('build:dev', [

  ]);
  grunt.registerTask('build:dist', [
    'build:dev',

  ]);
  grunt.registerTask('server', ['bgShell:server']);
  grunt.registerTask('default', [
    'build:dist',
    'server'
  ]);
}