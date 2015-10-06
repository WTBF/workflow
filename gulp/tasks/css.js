// gulp plugin 加载
var gulp         = require('gulp'),
    sass         = require('gulp-sass'),  // sass css预处理
    autoprefixer = require('gulp-autoprefixer'), // 处理浏览器前缀
    rename       = require('gulp-rename'),  // 文件重命名
    cssver       = require('gulp-make-css-url-version'),  // 为css中引用文件增加版本号
    minifycss    = require('gulp-minify-css'), // css 压缩
    config       = require('../config').css;  //  css 模块路径清单

// 编译 sass
gulp.task('sass',function() {
  return gulp.src(config.sassSrc)
    .pipe(sass({
      style:  'compressed' // 压缩后的css代码。
      // style:  'nested'  // 嵌套缩进的css代码，它是默认值
      // style:  'expanded'  // 没有缩进的、扩展的css代码
      // style:  'compact' // 简洁格式的css代码
    }))
    .on('error', function (err) { console.log(err.message); })
    .pipe(autoprefixer({
      /* ==== browsers 配置清单
      last 2 versions: 主流浏览器的最新两个版本
      last 1 Chrome versions: 谷歌浏览器的最新版本
      last 2 Explorer versions: IE的最新两个版本
      last 3 Safari versions: 苹果浏览器最新三个版本
      Firefox >= 20: 火狐浏览器的版本大于或等于20
      iOS 7: IOS7版本
      Firefox ESR: 最新ESR版本的火狐
      > 5%: 全球统计有超过5%的使用率
      ===== */
        browsers: ['last 2 versions'],
        cascade: true, //是否美化属性值 默认：true 像这样：
        //-webkit-transform: rotate(45deg);
        //        transform: rotate(45deg);
        remove:true //是否去掉不必要的前缀 默认：true
    }))
    .pipe(gulp.dest(config.sassDest))
    .pipe(rename({suffix: '.min' }))
    .pipe(cssver()) //给css文件里引用文件加版本号（文件MD5）
    .pipe(minifycss({
      advanced: true, //类型：Boolean 默认：true [是否开启高级优化（合并选择器等）]
      compatibility: '*', //类型：String 默认：''or'*' [启用兼容模式； 'ie7'：IE7兼容模式，'ie8'：IE8兼容模式，'*'：IE9+兼容模式]
      keepBreaks: false //类型：Boolean 默认：false [是否保留换行]
    }))
    .pipe(gulp.dest(config.sassDest));
});
