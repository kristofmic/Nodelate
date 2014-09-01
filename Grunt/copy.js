module.exports = {
  bootstrap: {
    expand: true,
    src: [
      '<%= componentsPath %>/bootstrap/dist/css/bootstrap.min.css',
    ],
    dest: '<%= pubCssPath %>/',
    flatten: true,
    filter: 'isFile'
  },
  fontawesome: {
    expand: true,
    src: [
      '<%= componentsPath %>/fontawesome/css/font-awesome.min.css',
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
  }
};