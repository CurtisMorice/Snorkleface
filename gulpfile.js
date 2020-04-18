const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync');

// compile html
// compile scss into css
function style(){
   //find my css file
	return gulp.src('./styles/*.scss')
	// pass the file through the sass compiler and check for errors
	.pipe(sass().on('error', sass.logError))
	// where to save the compiled css
	.pipe(gulp.dest('./css'))
	// Stream changes to all browsers
	.pipe(browserSync.stream());
}
function watch() {
	browserSync.init({
		server: {
			baseDir: './'
			}
});
	gulp.watch('./styles/*.scss');
	gulp.watch('./*html').on('change', browserSync.reload);
	gulp.watch('./src/**/*.html').on('change', browserSync.reload);
	gulp.watch('./src/js/**/*.js').on('change', browserSync.reload);
}

exports.style = style;
exports.watch = watch;



