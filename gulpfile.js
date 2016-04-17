var gulp    = require('gulp'),
    connect = require('gulp-connect'),
    historyApiFallback = require('connect-history-api-fallback');

gulp.task('server', function() {
    connect.server({
      root: '.',
      hostname: '0.0.0.0',
      port: 8080,
      livereload: true,
      middleware: function(connect, opt) {
        return [ historyApiFallback ];
    }
  });
});

gulp.task('html', function() {
   gulp.src('./*.html')
     .pipe(connect.reload());
});

gulp.task('css', function() {
   gulp.src('./assets/css/*.css')
     .pipe(connect.reload());
});

gulp.task('js', function() {
   gulp.src('./assets/js/*.js')
     .pipe(connect.reload());
});

gulp.task('watch', function() {
  gulp.watch(['./*.html'], ['html']);
  gulp.watch(['./assets/css/*.css'], ['css']);
  gulp.watch(['./assets/js/*.js'],   ['js']);
});

gulp.task('default', ['server', 'watch']);