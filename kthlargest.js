



const MinHeap = require("heap");

function kLargestMinHeap(arr, k) {
    let heap = new MinHeap((a, b) => a - b);
    console.log("heap",heap)

    for (let num of arr) {
        heap.push(num);
        console.log("heap",num,heap)
        if (heap.size() > k) heap.pop();
    }

    return heap.peek(); // kth largest element
}


let arr=[2,5,7,8,23,67,87,6,34,90,2]
let k=2
console.log(kLargestMinHeap(arr, k)); // Output: 87
