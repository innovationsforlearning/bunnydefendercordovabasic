var gulp   = require('gulp');
var jshint = require('gulp-jshint');
var mocha  = require('gulp-mocha');

// tasks
gulp.task('lint', function() {
  return gulp
    .src(['gulpfile.js', 'www/js/*.js', 'www/test/*.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('test', function() {
  return gulp
    .src('www/test/*.js')
    .pipe(mocha());
});

// default

gulp.task('default', ['lint', 'test'], function() {
  gulp.watch(['www/js/*.js', 'www/test/*.js'], function() {
    gulp.run('lint', 'test');
  });
});
