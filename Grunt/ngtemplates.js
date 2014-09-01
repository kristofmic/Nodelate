module.exports = {
  main: {
    src: [
      '<%= htmlPath %>/shared/**/*.html',
      '<%= htmlPath %>/main/**/*.html',
    ],
    dest: '<%= jsPath %>/main/templates_module.js',
    options: {
      module: 'ch.Main.Templates',
      standalone: true,
      htmlmin: {
        collapseWhitespace: true,
        collapseBooleanAttributes: true
      },
      url: function(url) {
        var
          urlArr = url.split('/');

        return urlArr[urlArr.length-1];
      }
    }
  }
};