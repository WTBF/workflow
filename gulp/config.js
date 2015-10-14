/*

  ==========================    config.js   =======================

  config.js 可以理解为任务流中得路径配置清单 , './gulp/tasks/*.js'任务中
  需要用到的路径 ,都要引入当前congfig中相当应的模块路径。

*/

// 初始化路径
var dest  = './build', // 发布路径
    src   = './src',   // 生产路径
    type  = '/www';    // 网站类型

module.exports = {

    // html 模块路径
    html: {
       jadeSrc: src  + type +  '/*.jade',
       htmlSrc: dest + type +  '/*.html',
      htmlDest: dest + type +  '/'
    },

    // css 模块路径
    css: {
        sassSrc: src  + type +  '/sass/*.scss',
         cssSrc: dest + type +  '/css/*.css',
       sassDest: dest + type +  '/css/'
    },

    // js 模块路径
    js: {
          jsSrc: src  + type +  '/js/**',
         jsDest: dest + type +  '/js/',
       jsConcat: dest + type +  '/js/index.js'
    },

    // image  模块路径
    image: {
        imageSrc: src + type +  '/images/*',
       imageDest: dest+ type +  '/images/'
    },

    // svgIcon 模块路径
    svgIcon: {
      svgIconSrc: src + type +  '/svg-icon/*.svg',
     svgIconDest: dest+ type +  '/svg-icon/'
    },

    // clean 模块路径
    clean: {
        cssSrc: dest + type + '/css/*.css',
        imgSrc: dest + type + '/images/*.{jpg,png,gif}'

    },

    // browserSync 模块路径
    browser: {
      src       : dest  + "/www",
      jade      : src   + "/www/*.jade",
      html      : dest  + "/www/*.html",
      sass      : src   + "/www/sass/**",
      css       : dest  + "/www/css/*.css",
      image     : src   + "/www/images/**",
      imagemin  : dest  + "/www/images/**",
      svgIconS  : src   + "/www/svg-icon/**",
      svgIconD  : dest  + "/www/svg-icon/"
    }
};
