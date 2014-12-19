// Initialize Gulp
var gulp = require('gulp'),
sass = require('gulp-ruby-sass'),
autoprefixer = require('gulp-autoprefixer'),
minifycss = require('gulp-minify-css'),
rename = require('gulp-rename'),
concat = require('gulp-concat'),
notify = require('gulp-notify'),
uglify = require('gulp-uglify'),
sourcemaps = require('gulp-sourcemaps'),
livereload = require('gulp-livereload');
gulp.task('styles', function() {

	return gulp.src('_resources/scss/app.scss')
	// Run the SASS compiler and autoprefixer
	.pipe(sass({ style: 'compact', 'sourcemap=none': true}))
	.on('error', function (error) {
            console.error(error);
            this.emit('end');
        })
	.pipe(autoprefixer('last 2 version', 'safari 5', 'ie 9', 'ios 6', 'android 4'))
	.pipe(gulp.dest('_resources/css'))
	.pipe(notify({ message: 'Outputted compiled CSS file' }))
	.pipe(rename({ suffix: '.min' }))
	.pipe(minifycss())
	.pipe(gulp.dest('_resources/css'))
	.pipe(notify({ message: 'Outputted Minified CSS.' }))
	.pipe(livereload())
	.pipe(notify({ message: 'Style task completed.' }));
});
gulp.task('scripts', function() {
  // Minify and copy all JavaScript (except vendor scripts)
  // with sourcemaps all the way down
  return gulp.src('_resources/js/**/*.js')
  	.pipe(sourcemaps.init())
    .pipe(concat('all.min.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('_resources/minjs'))
    .pipe(livereload());
});
gulp.task('html', function() {
	return gulp.src('**/*.html')
	.pipe(livereload());
});
// Initialize the Watch Task
gulp.task('watch', function() {
	livereload.listen();
	gulp.watch('**/*.html', ['html']);
	gulp.watch('_resources/js/**/*.js', ['scripts']);
	var watcher = gulp.watch(['_resources/scss/*.scss'], ['styles']);
	watcher.on('change', function(event) {
		console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
	});
});