// let a = 10;
// let b = (a+30, a + 10);

// console.log(b);

// async function fun() {
//   console.log("5");
//   await console.log("6")
//   console.log("7")
// }

// async function asyncfun() {
//   console.log("3");
//   await fun();
//   console.log("4");
// }

// console.log("1");
// asyncfun();
// console.log("2");






// 1 3 5 2 4


// let obj1={
//     name:"piyush",
//     address:{
//         city:"Pune"
//     }
// }

// let obj2 = {...obj1}

// obj2.address.city="goa"


// console.log(obj1.address.city)




// let p1= new Promise((resolve,reject)=>{
//     console.log("1")
//     resolve("3");

// })

// p1.then((val)=>{
//     console.log(val)
//     return 2;
// }).then((val)=>{
//     console.log(val)
//     return 3;
// }).catch((val)=>{
//     console.log(val);
// }).then((val)=>{
//     console.log(val);
// })


function fun(){
    let a=b=4

}


fun()



console.log(typeof a)
console.log(typeof b)



// function greet(name, city) {
//   console.log(`Hello ${name} from ${city}`);
// }

// setTimeout(greet, 1000, "Piyush", "Delhi");

// async function run() {
//   console.log("1");
//   await 42;
//   console.log("2");
// }
// run();
// console.log("3");



// const person = {
//   name: "Piyush",
//   sayHi:  ()=> {
//     setTimeout(() => {
//       console.log(this.name); // ✅ Piyush
//     }, 1000);
//   },
// };
// person.sayHi();




// fetch('https://dummyjson.com/products').then((res)=>{
//     return res.json()
// }).then((result)=>{
//     console.log(result)
// })



// console.log(typeof undefined)
console.log(NaN===NaN)