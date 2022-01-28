const gulp = require('gulp');
const sass  = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps'); // для удобства просмотра кода css
const watch = require('gulp-watch'); // отслеживает изменения

gulp.task('sass-compile', () => {
    return gulp.src('./dist/**/*.scss') // отслеживает файлы
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./src/css'));
});

gulp.task('watch', () => {
    gulp.watch('./dist/**/*.scss', gulp.series('sass-compile')); // отслеживает изменения в фалах scss
});