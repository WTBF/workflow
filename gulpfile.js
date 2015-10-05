/*

  ==========================    gulpfile.js   =======================

  gulpfile.js是gulp的主文件,在 './gulp/tasks/*.js'中的任务最后会通过
  require-dir 导入到当前这个文件中。

*/

// 导入tasks目录下的任务
var requireDir = require('require-dir');
requireDir('./gulp/tasks', { recurse: true });
