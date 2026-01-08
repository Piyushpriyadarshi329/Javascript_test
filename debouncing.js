// function debounce(fun, delay) {
//   let timer;
//   return (...arg) => {
//     clearTimeout(timer);
//     timer = setTimeout(() => {
//       fun.apply(this,arg);
//     }, delay);
//   };
// }

// let logWithDebounce = debounce(log, 500);

// function log(msg) {
//   console.log(msg);
// }

// function debounce(fun, delay = 500) {
//   let timer;

//   return function (...arg) {
//     clearTimeout(timer);
//     timer = setTimeout(()=>fun.apply(this,arg), delay);
//   };
// }

// function fun(data) {
//   console.log("data===>", data);
// }

// let funWithDebounce = debounce(fun, 500);




function debounce(fun, delay=500){

  let timer

  return function(...args){
    clearTimeout(timer)
    timer= setTimeout(()=>{
    fun.apply(this,args)
  },delay)
  }

  

 


}


function fun(data){
  console.log("data",data)
}



let funWithDebounce= debounce(fun,500);
funWithDebounce("hi");
funWithDebounce("hello");
funWithDebounce("abc");

