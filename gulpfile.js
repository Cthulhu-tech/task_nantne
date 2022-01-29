const gulp = require('gulp');
const pug = require('gulp-pug');
const sass  = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps'); // для удобства просмотра кода css

gulp.task('sass', async () => {

    gulp.src('./dist/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./src/'));

})

gulp.task('pug', async (done) => {

    gulp.src('./dist/**/*.pug')
    .pipe(pug({pretty: true}))
    .pipe(gulp.dest('./'));

    done();
})

gulp.task('run',gulp.series('sass','pug'))

gulp.task('watch',() => {
    gulp.watch('./dist/**/*.scss', gulp.series('sass'));
    gulp.watch('./dist/**/*.pug', gulp.series('pug'));
});

gulp.task('default', gulp.series( 'watch'));