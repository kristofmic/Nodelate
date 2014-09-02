module.exports = {
  main: {
    src: [
      '<%= htmlPath %>/main/**/*.html',
    ],
    dest: '<%= jsPath %>/main/templates_module.js',
    options: {
      module: 'nl.Templates',
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