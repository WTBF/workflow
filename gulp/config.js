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
    css:  {
        sassSrc: src  + type +  '/sass/*.scss',
         cssSrc: dest + type +  '/css/*.css',
       sassDest: dest + type +  '/css/'
    },

    // image  模块路径
    image: {
        imageSrc: src  + type +  '/images/*',
       imageDest: dest + type +  '/images/'
    },

    // clean 模块路径
    clean: {
        cleanSrc: dest
    }
};
