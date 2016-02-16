// http://www.codewars.com/kata/sum-all-the-arrays/solutions/javascript/me

const arraySum = a => a.valueOf();
Array.prototype.valueOf = function() {
  return this.reduce((x, y) => x + (y.valueOf() === +y ? y : 0), 0);
};