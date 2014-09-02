module.exports = {
  main_dev: {
    options: {
      style: 'expanded'
    },
    files: {
      '<%= pubCssPath %>/main.css': '<%= cssPath %>/main/main.scss'
    }
  },
  main_dist: {
    options: {
      style: 'compressed'
    },
    files: {
      '<%= pubCssPath %>/main.min.css': '<%= pubCssPath %>/main.css'
    }
  }
};