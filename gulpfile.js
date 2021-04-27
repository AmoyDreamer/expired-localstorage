var gulp = require('gulp'),
    uglify = require('gulp-uglify');
//Compress js
gulp.task('compress', function() {
    return gulp.src(['./src/*.js'])
        .pipe(uglify())
        .pipe(gulp.dest('./'))
})
//Watch task
gulp.task('watch', function() {
    //Watch .js files
    gulp.watch('./src/*.js', gulp.series('compress'));
})
