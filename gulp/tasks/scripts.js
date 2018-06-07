const gulp = require('gulp'), 
    webpack = require('webpack');

gulp.task('scripts', ['modernizr'], (callback) => {
    webpack(require('../../webpack.config'), (err, stats) => {
        if (err) {
            console.log(err.toString());
        }        
        console.log(stats.toString());
        callback();
    });
});