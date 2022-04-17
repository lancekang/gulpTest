const { series, parallel } = require('gulp');

function clean(cb){
  //body omitted
  cb();
}

function cssTranspile(cb){
  cb()
}

function cssMinify(cb){
  cb()
};

function jsTranspile(cb){
  cb()
}

function jsBunble(cb){
  cb()
}

function jsMinfy(cb){
  cb()
}

function publish(cb){
  cb()
}

exports.build = series(
  clean,
  parallel(
    cssTranspile, 
    series(jsTranspile, jsBunble)
  ),
  parallel(cssMinify, jsMinfy),
  publish
)