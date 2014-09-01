module.exports = {
  assets: {
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