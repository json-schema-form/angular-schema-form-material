var gulp = require('gulp'),
  streamqueue = require('streamqueue'),
  minifyHtml = require('gulp-minify-html'),
  templateCache = require('gulp-angular-templatecache'),
  concat = require('gulp-concat'),
  rename = require('gulp-rename'),
  uglify = require('gulp-uglify'),
  jscs = require('gulp-jscs');

gulp.task('build', ['templates','js']);
gulp.task('js', function() {
  var stream = streamqueue({ objectMode: true });
  // stream.queue(
  //   gulp.src('./src/**/*.html')
  //   .pipe(minifyHtml({
  //     empty: true,
  //     spare: true,
  //     quotes: true
  //   }))
  //   .pipe(templateCache({
  //     module: 'schemaForm',
  //     root: 'decorators/material/'
  //   }))
  //   );
  stream.queue(gulp.src('./src/**/*.js'));

  stream.done()
  .pipe(concat('material-decorator.js'))
  .pipe(gulp.dest('./'))
  .pipe(uglify())
  .pipe(rename('material-decorator.min.js'))
  .pipe(gulp.dest('./'));

});
gulp.task('templates', function() {
  var stream = streamqueue({ objectMode: true });
  stream.queue(
    gulp.src('./src/**/*.html')
    .pipe(minifyHtml({
      empty: true,
      spare: true,
      quotes: true
    }))
    .pipe(templateCache({
      module: 'schemaForm',
      root: 'decorators/material/'
    }))
    );

  stream.done()
  .pipe(concat('angular-schema-form-material-templates.js'))
  .pipe(gulp.dest('./src'))
  .pipe(uglify())
  .pipe(rename('angular-schema-form-material-templates.min.js'))
  .pipe(gulp.dest('./src'));

});

gulp.task('jscs', function() {
  gulp.src('./src/**/*.js')
      .pipe(jscs());
});

gulp.task('watch', function() {
  gulp.watch('./src/**/*', [ 'default' ]);
});

gulp.task('default', [ 'templates' ]);
