// TODO waf count no of digits in n = 257

let n = 257;

function countDigit(num) {
  let count = 0;
  while (num > 0) {
    count++;
    num = Math.floor(num / 10);
  }
  return count;
}
console.log(countDigit(255));

// Handle corner cases properly
// what if num is 0
console.log(countDigit(0));
// what if num is neative
console.log(countDigit(-255));

function countDigitModified(n) {
  if (n === 0) return 1;
  num = Math.abs(n);
  let count = 0;
  while (num > 0) {
    count++;
    num = Math.floor(num / 10);
  }
  return count;
}
console.log(countDigitModified(0));
console.log(countDigitModified(85));
console.log(countDigitModified(-255));
