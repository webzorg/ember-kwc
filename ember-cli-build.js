/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    // Add options here
    'ember-cli-foundation-6-sass': {
      'foundationJs': 'all'
    },
    fingerprint: {
      enabled: false,
      //generateAssetMap: true,
      //exclude: ['images/products/','images/products_section/', 'images/slideshow/', 'images/awards/']
    }
  });
  app.import('bower_components/imagesloaded/imagesloaded.pkgd.min.js');
  app.import('bower_components/Swiper/dist/js/swiper.jquery.min.js');
  app.import('bower_components/Swiper/dist/css/swiper.min.css');
  app.import('bower_components/jquery.kwicks/jquery.kwicks.min.js');

  //app.import('bower_components/ihover/src/ihover.css');//minimize it...
  //app.import('bower_components/photoswipe/dist/photoswipe-ui-default.min.js');

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  return app.toTree();
};
