


//Slice
// const nums = [1, 2, 3, 4, 5];
// const sliced = nums.slice(1, 4); // [2, 3, 4]
// console.log(nums); // [1, 2, 3, 4, 5] — original not modified


//splice
const nums = [1, 2, 3, 4, 5];
const removed = nums.splice(1, 2); // removes 2 elements from index 1
console.log(removed); // [2, 3]
console.log(nums);   // [ 1, 4, 5 ] original  modified


nums.splice(1, 0, 10, 11); // insert at index 1
console.log(nums);



// shift

// const arr = [10, 20, 30];
// const first = arr.shift();

// console.log(first); // 10
// console.log(arr);   // [20, 30]  original  modified

//unshift
const arr = [20, 30];
const length = arr.unshift(10); // Add at beginning

console.log(length); // 3
console.log(arr);    // [10, 20, 30] original  modified