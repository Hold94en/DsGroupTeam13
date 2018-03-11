/* jshint esversion:6 */

var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var replace = require('gulp-string-replace');
const sass = require('gulp-sass');
let cleanCSS = require('gulp-clean-css');
var removeCode = require('gulp-remove-code');

gulp.task('sass', function () {
	'use strict';
	gulp.src('./source/sass/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./source/css/'));
});

gulp.task('sass:watch', function () {
	'use strict';
	gulp.watch('./source/sass/*.scss', ['sass']);
});

gulp.task('build', function () {
	'use strict';
	gulp.src('source/html/*.html')
		.pipe(replace('../css/index.css', 'index.css'))
		.pipe(replace('../../node_modules/bootstrap/dist/css/bootstrap.min.css', '../node_modules/bootstrap/dist/css/bootstrap.min.css'))
		.pipe(replace('../img/', 'img/'))
		.pipe(removeCode({ production: true }))
		.pipe(replace('<script src="../../node_modules/jquery/dist/jquery.js"></script>', '<script src="../node_modules/jquery/dist/jquery.js"></script>'))
		.pipe(replace('<script src="../../node_modules/tether/dist/js/tether.js"></script>', '<script src="../node_modules/tether/dist/js/tether.js"></script>'))
		.pipe(replace('<script src="../../node_modules/bootstrap/dist/js/bootstrap.js"></script>', '<script src="../node_modules/bootstrap/dist/js/bootstrap.js"></script>'))
		.pipe(replace('<script src="../js/index.js"></script>', '<script src="bundle.js"></script>'))
		.pipe(replace('<script src="../js/fetchLocation.js"></script>', '<script src="fetchLocation.js"></script>'))
		.pipe(gulp.dest('dist'));
	gulp.src('source/css/*.css')
		.pipe(replace('../img/load.gif', 'img/load.gif'))
		.pipe(cleanCSS({ compatibility: 'ie8' }))
		.pipe(gulp.dest('dist'));
	gulp.src('source/img/**')
		.pipe(gulp.dest('dist/img'));
	gulp.src('source/js/index.js')
		.pipe(sourcemaps.init())
		.pipe(concat('bundle.js'))
		.pipe(uglify()).pipe(sourcemaps.write())
		.pipe(gulp.dest('dist'));
	gulp.src('source/js/fetchLocation.js')
	.pipe(replace('../img/', 'img/'))
	.pipe(gulp.dest('dist'));
});