'use strict';

var gulp = require('gulp');
var babel = require('gulp-babel');
var del = require('del');

var eslint = require('gulp-eslint');
var karma = require('karma').server;


gulp.task('clean', function(cb){
  del(['lib'], cb)
});

gulp.task("babel", ['clean'], function() {
  return gulp.src('src/*.js')
        .pipe(babel())
        .pipe(gulp.dest('lib'));
});


gulp.task('lint', function () {
  return gulp.src(['src/**/*.js'])
    .pipe(eslint())
    .pipe(eslint.format())
});


gulp.task("karma", ['lint'], function() {
  karma.start({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  });
});

gulp.task('test', ['lint', 'karma']);
gulp.task('build', ['clean', 'babel']);
