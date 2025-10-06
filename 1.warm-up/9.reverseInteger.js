// TODO Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

function reverseInteger(n) {
  let num = n;
  n = Math.abs(n);
  let reverse = 0;
  while (n > 0) {
    let lastDigit = n % 10;
    reverse = reverse * 10 + lastDigit;
    n = Math.floor(n / 10);
  }

  let limit = 2 ** 31;
  if (reverse < limit * -1 || reverse > limit) return 0;
  reverse = num > 0 ? reverse : reverse * -1;
  return reverse;
}

console.log(reverseInteger(123));
