var gulp = require('gulp');
var gulpif = require('gulp-if');
var gutil = require('gulp-util');

var args = require('./util/args');

// 与编译好的文件关联
gulp.task('browser', function (cb) {
    if (!args.watch) return cb();

    gulp.watch('app/**/*.js', ['scripts']);
    gulp.watch('app/**/*.ejs', ['pages']);
    gulp.watch('app/**/*.css', ['css']);
});
