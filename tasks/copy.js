var gulp = require('gulp');
var gulpif = require('gulp-if');
var livereload = require('gulp-livereload');
var args = require('./util/args');

gulp.task('copy', function () {
    return gulp.src('app/img/*.*')
        .pipe(gulp.dest('server/public/img/'))
        .pipe(gulpif(args.watch, livereload()))
});