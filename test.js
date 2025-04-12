


// array 


// let hotel = ["taj","lemon tree","xyz"];

// console.log(hotel.indexOf('taj'))


//indexing  //0,1,2,3

// hotel.push("test hotel")
// hotel.pop()
// hotel.shift()
// hotel[0]="new hotal"
// console.log("hotel",hotel[5])

// let num=7

// if(num>7){
//     console.log("number greater than 7")
// }else if(num==7){
// console.log("num is equal to 7")
// }
// else{
//     console.log("number less than 7")
// }




// ==   only check value
// 
//  ===  check value and data type
//let var const

//=
// let a=9;

// a=10

// let x=5.90098
// let y="5"

// console.log(x==y)

// console.log(typeof x)


// const numbers = [1, 2, 3, 4,5,78,39,54,80];

//filter   greate then 10


// let filternum=  numbers.filter((num)=>num%2==0)

// console.log("filternum",filternum)


//map

// let newNumber= numbers.map((num)=>num*2)

// console.log("newNumber",newNumber)

//  for loop

// let newarr=[]
// for(let i=0;i<numbers?.length;i++){

//     // console.log("i==>",numbers[i]*2)
//     newarr.push(numbers[i]*2)

// }

// console.log("newarr",newarr)



//boolean   true false


// let x= true;


// console.log(typeof x)


//object



// let student1  = {
//   name:"Piyush",
//   school:"abc school",
//   address:"Pune",
//   marks:[68,64,34,92]

// }

// let student2  = {
//     name:"Rohan",
//     school:"xyz school",
//     address:"Patna",
//     marks:{
//         hindi:40,
//         english:78
//     }
//   }

//   let students=[student1,student2]

//   let newarr=[1,4,6,7]

// console.log(students)


//https://jsonplaceholder.typicode.com/product/

//dairy  
// table
// product(name, price )  
//order




//backend   database(mysql,mongo)  => nodejs(javascript)(data fetch from table, update, insert,delete)

//frontend   React(html,css, javascript)

//axios



// let number =49

//  let newNumber= number.toString()

// console.log(typeof newNumber)
// console.log(typeof number)


// let number2="51"

// let piyush ="abc"

// let name= "piyush"
// let name2="priyadarshi"
// let result= Number(number2)  +    Number(number)


// console.log(result)



//delete  , update, insert,
//key access

// let arr = [2,76,32,78,88]

// console.log(JSON.stringify(arr))


// console.log(arr[1])





// let product={
//     name : "milk",
//     price:50,
// }



// // console.log(JSON.stringify(product))

// let s1=JSON.stringify(product)


// let order=JSON.parse(s1)

// console.log(order)

// order.qty=3;

// console.log(order)
// console.log("product",product)


//object  key access, delete key update/insert key  object=>string  string==>object






// let order= JSON.parse(JSON.stringify(product))

// console.log(product)
// console.log(order)



// let number=10
// let number2=number

// number2=number2*3


// console.log(number,number2)


// json



// let s1= '{"name":"milk","price":50}'

// // console.log(JSON.parse(s1))


// let s2 = "abghvjbknl;c"


// console.log(!true)


// let numbers = [34,54,32,55,73,23,12]

// let oddNumber = numbers.filter((i)=> i%2!=0)

// console.log(oddNumber)





//Function

//parameter  defult value set 

//... rest oprator, spread opretor

function sum(...num){
// console.log("num",num)
let addition=num.reduce((acc,cur)=>acc+cur,0)

console.log(`sum of all number is ${addition} `  , )
    // return a+b
}

sum(4,9,56,87,2)

// console.log(number)



//arrow function    ()=>


// function fun1(a){
//     console.log(a)

// }


let arr = [2,4,6];

// arr.map((num,i)=>{
//     console.log(i,"==>",num)

// })

// arr.map(function(i,index){
// console.log(index,"==>",i)
// })

// let fun1 = (a)=>{

// console.log(a)
// }



// fun1(4)































