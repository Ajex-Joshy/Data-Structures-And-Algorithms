// TODO write a function to find second largest element in an array

let arr = [1, 3, 4, 6, 7, 8, 8];

// function findSecondLargest(arr) {
//   let largest = arr[0];
//   let secondLargest = arr[1];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > largest) largest = arr[i];
//   }
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < largest && arr[i] > secondLargest) secondLargest = arr[i];
//   }
//   return secondLargest;
// }

// let result = findSecondLargest(arr);
// console.log(result);

// This works but not a optimised code

function findSecondLargest(arr) {
  let largest = -Infinity;
  let secondLargest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] > secondLargest) secondLargest = arr[i];
  }

  return secondLargest;
}

let result = findSecondLargest(arr);
console.log(result);

// This again works but think about corner cases
// 1. what if array is empty
// 2. what if array has only one element
// 3. what if array has duplicate elements
// This is very very important

function findSecondLargestModified(arr) {
  let largest = -Infinity;
  let secondLargest = -Infinity;

  if (arr.length < 2) return null;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] !== largest)
      secondLargest = arr[i];
  }

  return secondLargest;
}

let result2 = findSecondLargestModified(arr);
console.log(result2);
console.log(findSecondLargestModified([]));
