// gulp plugin 加载
var gulp    = require('gulp'),
    clean   = require('gulp-clean'),
    config  = require('../config').clean;

// 清空图片、样式、js
gulp.task('clean', function () {
  return gulp.src([config.cleanSrc], {read: false})
    .pipe(clean());
});

// 默认任务 清空图片、样式、js并重建 运行语句 gulp
gulp.task('make', ['clean'], function() {
    gulp.start('jadeCompile','sass','imagemin');
});
