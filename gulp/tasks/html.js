// gulp plugin 加载
var gulp      = require('gulp');
var jade      = require('jade'); // jade插件
var gulpJade  = require('gulp-jade'); // jade插件
var htmlmin   = require('gulp-htmlmin'); // html 压缩
var config    = require('../config').html; // html 模块路径清单

// 编译 jade文件生产html -- > 生产环境
gulp.task('jadeCompile',function(){
  return gulp.src(config.jadeSrc)
    .pipe(gulpJade({
      jade: jade,
      pretty: true
    }))
    .pipe(gulp.dest(config.htmlDest));
});


// html 压缩 -- > 发布环境
gulp.task('htmlmin',function(){
  var options = {
      removeComments: true,//清除HTML注释
      collapseWhitespace: true,//压缩HTML
      collapseBooleanAttributes: true,//省略布尔属性的值 <input checked="true"/> ==> <input />
      removeEmptyAttributes: true,//删除所有空格作属性值 <input id="" /> ==> <input />
      removeScriptTypeAttributes: true,//删除<script>的type="text/javascript"
      removeStyleLinkTypeAttributes: true,//删除<style>和<link>的type="text/css"
      minifyJS: true,//压缩页面JS
      minifyCSS: true//压缩页面CSS
  };
  return gulp.src(config.htmlSrc)
      .pipe(htmlmin(options))
      .pipe(gulp.dest('./dist/html'));
});
