// TODO leetcode 26 Remove Duplicates from Sorted Array
// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique 
// element appears only once. The relative order of the elements should be kept the same. Then return the number of 
// unique elements in nums.

// lets understand word by word

// Given an integer array nums - This means that array contains both positive and negative numbers
// sorted in non-decreasing order - I will explain with an example
// sorted & Increasing order - [1, 3, 4, 5, 7, 8]
// a[i + 1] > a[i]
// sorted & non-decreasing order - [1, 3, 3,  4, 4,  5, 7, 8, 8, 8]
// a[i + 1] >= a[i]
// so by short we can say that it will contain duplicate values
// remove the duplicates in-place - This means that remove the duplicates from the existing / given array. You dont want create a new array
// The relative order of the elements should be kept the same - It means if the array is in order - [1, 3, 3,  4, 4,  5, 7, 8, 8, 8]
// our answer should be [1, 3, 4, 5, 7, 8] not in any other order like [1, 5, 3, 8, 7]. 


// now lets how we can solve this problem 

let nums = [1, 3, 3,  4, 4,  5, 7, 8, 8, 8]
// so what we will do in the sense we will keep track of 2 pointers. one pointer will iterate through the array and check
// whether the element is unique. and the pointer we used to keep track of index where we should insert if unique element is found



var removeDuplicates = function(nums) {
    let x = 0; // pointer for the last unique element
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > nums[x]) { // found a new unique number
            x++;
            nums[x] = nums[i]; // move the unique number forward
        }
    }
    return x + 1; // number of unique elements
};