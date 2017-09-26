var gulp = require('gulp');
var gulpif = require('gulp-if');
var livereload = require('gulp-livereload');
var args = require('./util/args');

gulp.task('css', function () {
    return gulp.src('app/**/*.css')
        .pipe(gulp.dest('server/public'))
        .pipe(gulpif(args.watch, livereload()))
});