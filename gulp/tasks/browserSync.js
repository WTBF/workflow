// gulp plugin 加载
var gulp        = require('gulp'),
    browserSync = require('browser-sync').create(),
    config      = require('../config').browser,
    reload      = browserSync.reload;

gulp.task('servea', ['jadeCompile','sass','imagemin','svgIcon'], function() {

    browserSync.init({
        server: config.src
    });

    gulp.watch(config.jade, ['jadeCompile']);
    gulp.watch(config.sass, ['sass']);
    gulp.watch(config.image, ['imagemin']);
    gulp.watch(config.svgIconS, ['svgIcon']);
    gulp.watch(config.html).on('change', reload);
    gulp.watch(config.css).on('change', reload);
    gulp.watch(config.imagemin).on('change', reload);
    gulp.watch(config.svgIconD).on('change', reload);

});

gulp.task('look', ['servea']);
