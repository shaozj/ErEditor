// 插件嵌入
var gulp = require('gulp');
var rename = require("gulp-rename");
var babel = require('gulp-babel');
var es2015 = require('babel-preset-es2015');

// es6 转 es5
var buildJs = function(){
  var src = arguments[0];
  var dest = arguments[1];

  gulp.src(src)
    .pipe(babel({
      presets: [es2015]
    }))
    .pipe(rename({ suffix: '-es5' }))
    .pipe(gulp.dest(dest));
};

gulp.task('build', function(cb){
  console.log('=========gulp build task============');
  console.log('process.env.es5FilePath = ' + process.env.es5FilePath);
  var arr = process.env.es5FilePath.split('/');
  arr.splice(arr.length - 1, 1);
  var dest = arr.join('/');
  console.log('dest = ' + dest);
  buildJs(process.env.es5FilePath, dest);

  // callback
  console.log('global.gulpCb = ' + process.env.gulpCb);
  console.log('typeof global.gulpCb = ' + (typeof process.env.gulpCb));

  (global.gulpCb)();
});

gulp.task('default', ['build']);
