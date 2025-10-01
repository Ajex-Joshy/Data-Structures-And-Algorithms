//TODO waf to find largest element in an array

let arr = [1, 4, 6, 3, 8, 8, 0];

function findLargestElement(arr) {
  let max = arr[0];
  // or let max = -Infinity
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
  }
  return max;
}

let result = findLargestElement(arr);
console.log(result);
