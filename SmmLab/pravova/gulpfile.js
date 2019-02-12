"use strict";

const gulp    = require("gulp"),
  sass        = require("gulp-sass"),
  browserSync = require("browser-sync"),
  autoprefixer = require("gulp-autoprefixer");

sass.compiler = require("node-sass");

gulp.task("sass", function() {
  return gulp
    .src("src/assets/sass/*.sass")
    .pipe(sass().on("error", sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
  }))
    .pipe(gulp.dest("src/assets/css"))
    .pipe(browserSync.reload({ stream: true }))
});

gulp.task("browser-sync", function() {
  browserSync({
    server: { baseDir: "src" },
    notify: false
  });
});

gulp.task("watch", function() {
  gulp.watch("src/assets/sass/*.sass", gulp.parallel("sass"));
  gulp.watch("src/*.html",browserSync.reload({ stream: true }));
});
gulp.task('default',gulp.parallel( "sass","browser-sync","watch"))
