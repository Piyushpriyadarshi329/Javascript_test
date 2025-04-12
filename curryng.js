// function curryMultiply(a) {
//     return function (b) {
//         console.log("a",a,b)

//       if (b !== undefined) return curryMultiply(a * b);
//       return a;
//     };
//   }

function curryMultiply(num1) {
  return function (num2) {
    if (num2 !== undefined) {
      return curryMultiply(num1 * num2);
    } else {
      return num1;
    }
  };
}

console.log(curryMultiply(2)(3)(4)()); // Output: 24

// function add(x) {
//     return function(y) {
//         console.log(x,y)
//       return x + y;
//     };
//   }

//   console.log(add(3)(5)); // Output: 8
