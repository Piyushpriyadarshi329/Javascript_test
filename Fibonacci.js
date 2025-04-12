


function memoried(){

    let catche ={}

   return function fibonacci(n) {
        if (n <=1) {
          return n;
        } else {

            if(catche[n]){
                console.log("cache",catche[n])
                return catche[n]
            }else{
                console.log("else call")
                catche[n]=fibonacci(n-1)+ fibonacci(n-2)
                return catche[n]

            }
        }
      }


}


0,1,1,2,3,5,8,13,21,34,55,89,144,233


const fib= memoried()

console.log(fib(10));
console.log(fib(12));



// function fibonacci(n){
// if(n<=1){
//     return n
// }else{
//     return fibonacci(n-1)+fibonacci(n-2)
// }


// }

// console.log(fibonacci(10))