// http://www.codewars.com/kata/ruplesjs-number-1-n-times-do

Number.prototype.times = function (cb) {
  for (let i = 0, n = Math.round(this.valueOf()); i < n; ++i) {
    cb();
  }
};