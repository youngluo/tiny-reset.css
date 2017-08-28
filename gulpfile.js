const Eagle = require('gulp-eagle');

Eagle.config.sourcemaps = false;

Eagle(function (mix) {
  mix.style('./src/tiny-reset.css', 'tiny-reset.min.css')
});
