module.exports = {
  scripts: {
    files: ['<%= jsPath %>/**/*.js'],
    tasks: ['concat'],
    options: {

    }
  },
  styles: {
    files: [
      '<%= cssPath %>/**/*.scss'
    ],
    tasks: ['sass']
  },
  templates:  {
    files: [
      '<%= htmlPath %>/**/*.html'
    ],
    tasks: ['ngtemplates']
  }
};