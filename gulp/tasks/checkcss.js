'use strict';

module.exports = function() {
  $.gulp.task('gulp-uncss', function() {
    return $.gulp.src('./source/style/common/order.scss')
        .pipe($.gp.uncss({
            html: [$.config.root + '/*.html']
        }))
        .pipe($.gulp.dest($.config.root + '/'));
  })
};
