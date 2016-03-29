var config = {
  all: {
    name: 'Class Room Web',
    port: process.env.PORT || 3000,
    scripts: [
      'bower_components/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/affix.js',
      'bower_components/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/alert.js',
      'bower_components/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/button.js',
      'bower_components/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/carousel.js',
      'bower_components/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/collapse.js',
      'bower_components/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/dropdown.js',
      'bower_components/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/tab.js',
      'bower_components/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/transition.js',
      'bower_components/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/scrollspy.js',
      'bower_components/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/modal.js',
      'bower_components/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/tooltip.js',
      'bower_components/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/popover.js'
    ],
    stylesheets: [
      'public/css/app.css'
    ]
  },
  development: {
    minifyScripts: false,
    minifyStylesheets: false
  },
  production: {
    minifyScripts: true,
    minifyStylesheets: true
  },
};

module.exports = function (env) {
  return require('underscore').extend(config.all, config[env]);
};
