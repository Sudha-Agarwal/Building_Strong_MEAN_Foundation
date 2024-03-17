const gulp = require('gulp');
const ts = require('gulp-typescript');

const tsProject = ts.createProject('tsconfig.json');

function compileTypeScript() {
  const tsResult = tsProject.src().pipe(tsProject());
  return tsResult.js.pipe(gulp.dest('dist/'));
}

function watchTypeScript() {
    gulp.watch(['src/**/*.ts', '!src/**/node_modules/**'], compileTypeScript);
}

exports.default = gulp.series(compileTypeScript, watchTypeScript);