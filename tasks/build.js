var gulp =require('gulp');
// 处理顺序的gulp包
var gulpSequence =require('gulp-sequence');
// server最后执行
gulp.task('build', gulpSequence('clean', 'css', 'pages', 'scripts', ['browser', 'server']));