var gulp = require("gulp");
var sass = require("gulp-sass");
gulp.task("sass", function() {
    return gulp.src("src/scss/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("src/dist/"))
})
gulp.task("watch", function() {
    gulp.watch("src/scss/*.scss", gulp.series("sass"))
})