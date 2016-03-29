var gulp = require('gulp')
	, nodemon = require('gulp-nodemon')
	, compass = require('gulp-compass')
  , concat = require('gulp-concat')
  , uglify = require('gulp-uglify')
  , minifyCss = require('gulp-minify-css')
  , expect = require('gulp-expect-file')
  , config = require('./config')('development')
;



// ====
// node
// ====

gulp.task('watch-node', function () {
  nodemon({script: 'app.js', nodeArgs: ['--harmony']})
    .on('change', function () {
      console.log('nodemon change');
    })
    .on('restart', function () {
      console.log('nodemon restart');
    })
  ;
});



// ==========
// css / scss
// ==========

gulp.task('minify-css', function () {
  gulp.src(config.stylesheets)
    .pipe(expect.real(config.stylesheets))
    .pipe(concat('all.css'))
    .pipe(minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(gulp.dest('public/css'))
  ;
});

gulp.task('watch-css', ['minify-css'], function () {
  gulp.watch(config.stylesheets, ['minify-css']);
});

gulp.task('compile-scss', function () {
	gulp.src(['public/scss/app.scss'])
		.pipe(compass({
      css: 'public/css',
      sass: 'public/scss',
      image: 'public/img',
      import_path: ['bower_components/bootstrap-sass-official/vendor/assets/stylesheets']
  	}))
		.pipe(gulp.dest('public/css'))
	;
});

gulp.task('watch-scss', ['compile-scss'], function () {
  gulp.watch(['public/scss/*.scss'], ['compile-scss']);
});



// ===========
// frontend js
// ===========

gulp.task('minify-js', function () {
  gulp.src(config.scripts)
    .pipe(expect.real(config.scripts))
    .pipe(concat('all.js'))
    .pipe(uglify())
    .pipe(gulp.dest('public/js'))
  ;
});

gulp.task('watch-js', ['minify-js'], function () {
  gulp.watch(config.scripts, ['minify-js']);
});



// ==========
// minify all
// ==========

gulp.task('minify', ['minify-js', 'minify-css']);



// =====
// watch
// =====

gulp.task('watch', ['watch-node', 'watch-css', 'watch-scss', 'watch-js']);
