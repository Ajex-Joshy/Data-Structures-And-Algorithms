// TODO Given an integer x, return true if x is a palindrome, and false otherwise. Input: x = 121 Output: true Input: x = -121 Output: false as reverse is 121-

function isPalindrome(n) {
  if (n < 0) return false;
  let original = n;
  let reversed = 0;
  while (n > 0) {
    let lastDigit = n % 10;
    reversed = reversed * 10 + lastDigit;
    n = Math.floor(n / 10);
  }
  return reversed === original ? true : false;
}

console.log(isPalindrome(122));
