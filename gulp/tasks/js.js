// gulp plugin 加载
var gulp      = require('gulp'),
    uglify    = require('gulp-uglify'), // js 压缩
    concat    = require('gulp-concat'), // js 合并
    config    = require('../config').js;  // js 路径配置清单

//  js 合并文件
//  合并build/js文件夹下的所有javascript 文件为一个main.js放入build/js下
gulp.task('jsConcat', function() {
  return gulp.src(config.jsSrc)
    .pipe(uglify({
      mangle: true,//类型：Boolean 默认：true 是否修改变量名
      compress: true//类型：Boolean 默认：true 是否完全压缩
    }))
    .pipe(concat('main.min.js'))
    .pipe(gulp.dest(config.jsDest));
});


//  js 转移至发布环境
// gulp.task('jsmin',function() {
//   gulp.src([config.jsSrc])
//     .pipe(uglify({
//       mangle: true,//类型：Boolean 默认：true 是否修改变量名
//       compress: true//类型：Boolean 默认：true 是否完全压缩
//     }))
//     .pipe(gulp.dest(config.jsDest));
// });
