let arr = [1, 4, 7, 55, 78, 89];


// Array.prototype.mymap = function (callback, context) {
//   let newarr = [];

//   for (let i = 0; i < this.length; i++) {

//     newarr.push(callback.call(context,this[i],i,this))

//   }

//   return newarr;
// };

// let newArr = arr.mymap(
//   function (i, index, x) {
//     console.log(i, "===>", x);
//     console.log("this", this);
//     return i;
//   },
//   { factor: 6 }
// );

// console.log("newArr", newArr);



// Array.prototype.npower = function (npower) {
//   let newArr = [];

//   this.forEach((i) => {
//     newArr.push(i ** npower);
//   });

//   return newArr;
// };


// Array.prototype.npower=function(npower){
//   let newArr=[]
//   this.forEach((i)=>{
//     newArr.push(i**npower)
//   })



//   return newArr
// }



// Array.prototype.npower= function(n){

//   console.log(this)
// let newArr=[]

// this.forEach((i)=>{
//   return (i**n)
// })
// return this
// }


// console.log(arr.npower(2));


arr.forEach((i)=>{
  return (i**2)
})


console.log(arr)

