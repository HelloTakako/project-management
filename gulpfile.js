var gulp = require('gulp');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var sourcemaps = require('gulp-sourcemaps');
var cmq = require('gulp-combine-media-queries');//@media

gulp.task('sass', function () {
    gulp.src('sass/*.scss')
        .pipe(sourcemaps.init())
        .pipe(plumber())
        .pipe(sass({ style: 'expanded' }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('css'));
});

gulp.task('cmq', function () {
    gulp.src('css/*.css')
        .pipe(cmq({
            log: false
        }))
        .pipe(gulp.dest('css'));
});

gulp.task('watch', function () {
    gulp.watch('src/css/*.sass', ['sass']);
});
gulp.task('default', ['sass', 'cmq']);