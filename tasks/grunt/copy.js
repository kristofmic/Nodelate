module.exports = {
  components: {
    expand: true,
    src: [
      '<%= componentsPath %>/bootstrap/dist/css/bootstrap.min.css',
      '<%= componentsPath %>/fontawesome/css/font-awesome.min.css',
      '<%= componentsPath %>/chSnackbar/dist/snackbar.min.css'
    ],
    dest: '<%= pubCssPath %>/',
    flatten: true,
    filter: 'isFile'
  },
  images: {
    expand: true,
    src: [
      '<%= imagePath %>/**/*.png',
      '<%= imagePath %>/**/*.jpg',
      '<%= imagePath %>/**/*.ico',
    ],
    dest: '<%= pubImagePath %>/',
    flatten: true,
    filter: 'isFile'
  },
  fonts: {
    expand: true,
    src: [
      '<%= componentsPath %>/fontawesome/fonts/*',
    ],
    dest: '<%= pubFontPath %>/',
    flatten: true,
    filter: 'isFile'
  }
};