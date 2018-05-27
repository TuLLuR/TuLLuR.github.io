const gulp = require('gulp');
const watch = require('gulp-watch');


gulp.task('default', () => {
    console.log('You create it!');    
});

gulp.task('html', () => {
    console.log('HTML');
});

gulp.task('css', () => {
    console.log('CSS');
});
gulp.task('watch', () => {
    watch('./app/index.html', () => {
        gulp.start('html');
    });

    watch('./app/style/**/*.css', () => {
        gulp.start('css');
    });
});