var gulp = require('gulp');
var less = require('gulp-less');
var minifyCss = require('gulp-minify-css');
var path = require('path');

gulp.task('less', function () {
    gulp.src('./src/**/less/**/*.less')
        .pipe(less({
            paths: [ path.join(__dirname, 'less', 'includes') ]
        }))
        .pipe(minifyCss({keepBreaks:true}))
        .pipe(gulp.dest('./dist/'));
});