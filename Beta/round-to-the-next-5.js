// http://www.codewars.com/kata/round-to-the-next-5

function roundToNext5(n){
  if (n%5) {
    return n + (5 - n%5);
  }
  return n;
}