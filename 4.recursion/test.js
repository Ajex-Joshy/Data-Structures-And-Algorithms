// let arr = [2, 2, 3, 4, 5];

// function sumArr(n) {
//   let isOdd = arr[n] % 2 !== 0;
//   if (n === 0) {
//     return isOdd ? arr[0] : 0;
//   }
//   return isOdd ? arr[n] + sumArr(n - 1) : sumArr(n - 1);
// }

// console.log(sumArr(arr.length - 1));

// function fact(n) {
//   if (n < 1) return 1;
//   return n * fact(n - 1);
// }
// console.log(fact(5));

// function isPowerOfTwo(n) {
//   if (n === 1) return true;
//   if (n % 2 !== 0 || n < 1) return false;
//   return power(n / 2);
// }

// console.log(power(3));

// function fib(n) {
//   if (n === 0) return 0;
//   if (n === 1) return 1;
//   return fib(n - 1) + fib(n - 2);
// }
// console.log(fib(6));

n = -2;

function pow(x) {
  if (x === 0) return 1;
  return n * pow(x - 1);
}
let res = pow(2);
console.log(1 / res);
