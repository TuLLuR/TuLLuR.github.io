const gulp = require('gulp'),
    imageMin = require('gulp-imagemin'),
    usemin = require('gulp-usemin'),
    del = require('del'),
    rev = require('gulp-rev'),
    cssNano = require('gulp-cssnano'),
    uglify = require('gulp-uglify'),
    browserSync = require('browser-sync').create();

gulp.task('previewDist', function(){
    browserSync.init({
        notify: false, 
        server: {
            baseDir: "dist"
        }
    });
});

gulp.task('deleteDistFolder', function(){
    return del("./dist");
});

gulp.task('copyGeneralFiles', ['deleteDistFolder'], function(){
    var pathsToCopy = [
        './app/**/*',
        '!./app/index.html',
        '!./app/assets/images/**',
        '!./app/assets/styles/**',
        '!./app/assets/scripts/**',
        '!./app/temp',
        '!./app/temp/**'
    ];
    return gulp.src(pathsToCopy)
        .pipe(gulp.dest("./dist"));
});

gulp.task('optimizeImages', ['deleteDistFolder', 'icons'], function() {
    return gulp.src(['./app/assets/images/**/*', '!./app/assets/images/icons', '!./app/assets/images/icons/**/*'])
        .pipe(imageMin({
            // Optimize PNG
            progressive: true,
            // Optimize GIF
            interlaced: true,
            // Optimize SVG
            multipass: true
        }))
        .pipe(gulp.dest("./dist/assets/images"));
});

gulp.task('usemin', ['deleteDistFolder', 'styles', 'scripts'], function(){
    return gulp.src("./app/index.html")
        .pipe(usemin({
            css: [function(){
                return rev();
            }, function() {
                return cssNano();
            }],
            js: [function(){
                return rev();
            }, function(){
                return uglify();
            }]
        }))
        .pipe(gulp.dest("./dist"));
});

gulp.task('build', ['deleteDistFolder', 'copyGeneralFiles', 'optimizeImages', 'usemin']);