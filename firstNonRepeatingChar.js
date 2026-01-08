



// function firstNonRepeatingChar(s){
//     let obj={}
//    for( let char of s){
//     console.log("char",char)

//     if(obj[char]){
//         obj[char]=obj[char]+1;
//     }else{
//         obj[char]=1
//     }
//    }

//    console.log(obj)

// for(let char of s){
//    if( obj[char]===1){
//     return char

// }
// return null

// }
// }







// let res=firstNonRepeatingChar("swiss")
// console.log("res",res)




// function balancedP(s){
//     let arr=[]



// }


// let res=balancedP("{[()]}")
// console.log("res",res)



// console.log(NaN===NaN);

const wait = ms => new Promise(res => setTimeout(()=>{res("55")}, ms));


async function sum(){
console.log("1")
let x=await wait(2000);
console.log("x",x)
console.log("2")

}
sum()
