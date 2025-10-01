//TODO waf that accepts an array and value. if that value exist in array return the index of value, if not return -1

let arr = [1, 2, 3, 4, 5];

function findIndex(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (val === arr[i]) return i;
  }
  return -1;
}

let result = findIndex(arr, 2);
console.log(result);
result = findIndex(arr, 21);
console.log(result);
