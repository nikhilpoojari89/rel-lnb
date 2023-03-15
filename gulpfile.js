var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var autoprefix = require('gulp-autoprefixer');
var csso = require('gulp-csso');

sass.compiler = require('node-sass');

var browserSync = require('browser-sync');
var reload = browserSync.reload;

gulp.task('styles', function () {
  return gulp.src('./assets/sass/app.scss')
    .pipe(sass.sync())
    .pipe(autoprefix())
    .pipe(csso())
    .pipe(gulp.dest('./public/css/'))
});

gulp.task('js', function () {
  return gulp.src(['assets/js/jquery-3.5.1.min.js', 'assets/js/popper.min.js', './node_modules/bootstrap/dist/js/bootstrap.min.js'])
    .pipe(concat('app.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./public/js/'));
});

gulp.task('serve', gulp.series('styles','js', function () {

  browserSync.init({
    proxy: 'localhost/rel-lnb/',
  });

  gulp.watch('./assets/sass/**/*.scss', gulp.series('styles')).on('change', reload);
  gulp.watch('./assets/js/**/*.js', gulp.series('js')).on('change', reload);
  gulp.watch("./**/*.php").on('change', reload);
}));


