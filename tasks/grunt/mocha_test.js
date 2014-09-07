module.exports = {
  spec: {
    options: {
      reporter: 'spec',
      require: 'specs/blanket.conf'
    },
    src: [
      './specs/mocha.conf.js',
      './specs/controllers/**/*.spec.js'
    ]
  },
  cov: {
    options: {
      reporter: 'html-cov',
      quiet: true,
      captureFile: 'specs/reports/mocha_test_coverage.html'
    },
    src: [
      './specs/mocha.conf.js',
      './specs/controllers/**/*.spec.js'
    ]
  }
};