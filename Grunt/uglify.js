module.exports = {
  all: {
    options: {
      compress: {
        drop_console: true
      }
    },
    files: {
      '<%= pubJsPath %>/components.min.js': ['<%= pubJsPath %>/components.js'],
      '<%= pubJsPath %>/main.min.js': ['<%= pubJsPath %>/main.js']
    }
  }
};