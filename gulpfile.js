const Eagle = require('gulp-eagle');

Eagle.config.buildPath = '';
Eagle.config.sourcemaps = false;

Eagle(function (mix) {
  mix.style('./reset/tiny-reset.css', './reset/tiny-reset.min.css')
});
