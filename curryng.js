// "Currying is the technique of converting a function with multiple arguments into a sequence of nested functions
// that each take one argument. It helps in creating reusable and composable functions, and is widely used in
// functional programming."

// function curryMultiply(a) {
//     return function (b) {
//         console.log("a",a,b)

//       if (b !== undefined) return curryMultiply(a * b);
//       return a;
//     };
//   }

// function curryMultiply(num1) {
//   return function (num2) {
//     if (num2 !== undefined) {
//       return curryMultiply(num1 * num2);
//     } else {
//       return num1;
//     }
//   };
// }

// console.log(curryMultiply(2)(3)(4)()); // Output: 24

// function add(x) {
//     return function(y) {
//         console.log(x,y)
//       return x + y;
//     };
//   }

// function add(num1) {
//   return function (num2) {
//     if (num2 !== undefined) {
//       return add(num1 + num2);
//     } else {
//       return num1;
//     }
//   };
// }

// function add(num1){

// return function(num2){
//   if(num2!==undefined){
//     return add(num1+num2)
//   }else{
//     return num1
//   }

// }

// }

function add(num1) {
  return (num2) => {
    if (num2) {
      return add(num1 + num2);
    } else {
      return num1;
    }
  };
}

console.log(add(3)(5)(6)()); // Output: 8
