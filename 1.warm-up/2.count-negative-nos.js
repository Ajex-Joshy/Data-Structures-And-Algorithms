//TODO waf to count no negative numbers in an array

let arr = [1, -1, 2, 3, -5, 0, 0];

function countNegativeNums(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) count++;
  }
  return count;
}

let result = countNegativeNums(arr);
console.log(result);
