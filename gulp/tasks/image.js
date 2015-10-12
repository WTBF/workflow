// gulp plugin 加载
var gulp         = require('gulp'),
    imagemin     = require('gulp-imagemin'),
    pngquant     = require('imagemin-pngquant'),
    cache        = require('gulp-cache'),
    browserSync = require('browser-sync').create(),
    reload      = browserSync.reload,
    config       = require('../config').image;

// 压缩图片 -- 生产
// 使用”gulp-cache”只压缩修改的图片，没有修改的图片直接从缓存文件读取
// (C:\Users\Administrator\AppData\Local\Temp\gulp-cache)
gulp.task('imagemin',function() {
  return gulp.src(config.imageSrc)
      .pipe(cache(imagemin({
        progressive:  true,
        svgoPlugins:  [{removeViewBox:false}],
        use:  [pngquant()]
      })))
      .pipe(gulp.dest(config.imageDest))
      .pipe(reload({stream: true}));
});
