var gulp = require('gulp');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('sass', function () {
    gulp.src('src/css/*.sass')
        .pipe(sourcemaps.init())
        .pipe(plumber())
        .pipe(sass({ style: 'expanded' }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('css'));
});

gulp.task('watch', function () {
    gulp.watch('src/css/*.sass', ['sass']);
});
gulp.task('default', 'sass');