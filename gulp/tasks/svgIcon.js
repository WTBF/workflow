// gulp plugin 加载
var gulp      = require('gulp'),
    svgIcon   = require('gulp-svg-symbols'),
    browserSync = require('browser-sync').create(),
    reload      = browserSync.reload,
    config    = require('../config').svgIcon;


gulp.task('svgIcon',function() {
  return gulp.src(config.svgIconSrc)
    .pipe(svgIcon())
    .pipe(gulp.dest(config.svgIconDest))
    .pipe(reload({stream: true}));
});
