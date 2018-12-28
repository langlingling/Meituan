var gulp = require("gulp");
var sass = require("gulp-sass"); //编译scss //监听文件的变化
gulp.task("sass", function() {
    return gulp.src("scss/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("dist/"));
});
gulp.task("wacss", function() { //监听sass文件
    gulp.watch("scss/*.scss", gulp.series("sass"));
});