const gulp = require("gulp");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");

gulp.task("css", function () {
  const plugins = [autoprefixer(), cssnano()];
  return gulp
    .src("src/css/*.css")
    .pipe(postcss(plugins))
    .pipe(gulp.dest("dist/css"));
});
