"use strict";

const gulp    = require("gulp"),
  sass        = require("gulp-sass"),
  browserSync = require("browser-sync"),
  concat      = require("gulp-concat"),
  uglify      = require("gulp-uglifyjs"),
  autoprefixer = require("gulp-autoprefixer");

sass.compiler = require("node-sass");

gulp.task("sass", function() {
  return gulp
    .src("src/sass/**/*.sass")
    .pipe(sass().on("error", sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
  }))
    .pipe(gulp.dest("src/css"))
    .pipe(browserSync.reload({ stream: true }))
});
gulp.task("scripts", function(){
  return gulp.src('src/libs/jquery/dist/jquery.min.js')
  .pipe(concat('libs.min.js'))
  .pipe(uglify())
  .pipe(gulp.dest("src/js"))
});

gulp.task("browser-sync", function() {
  browserSync({
    server: { baseDir: "src" },
    notify: false
  });
});

gulp.task("watch", function() {
  gulp.watch("src/sass/*.sass", gulp.parallel("sass"));
  gulp.watch("src/*.html",browserSync.reload({ stream: true }));
  gulp.watch("src/js/*.js",browserSync.reload({ stream: true }));
});
gulp.task('build', function() {

  let buildCss = gulp.src(// Переносим библиотеки в продакшен
      'src/css/*.css'
      )
  .pipe(gulp.dest('dist/css'))

  let buildFonts = gulp.src('src/fonts/**') // Переносим шрифты в продакшен
  .pipe(gulp.dest('dist/fonts'))

  let buildJs = gulp.src('src/js/**/*') // Переносим скрипты в продакшен
  .pipe(gulp.dest('dist/js'))

  let buildHtml = gulp.src('src/*.html') // Переносим HTML в продакшен
  .pipe(gulp.dest('dist'));

    });
gulp.task('default',gulp.parallel( "sass","scripts","browser-sync","watch"))
