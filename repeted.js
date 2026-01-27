// const arr = [
//   25, 11, 16, 7, 21, 29, 10, 8, 27, 17, 6, 13, 12, 16, 9, 19, 24, 5, 14, 18, 20,
//   23, 22, 26, 15, 6, 28, 16, 7, 10,
// ];

// let obj = {};

// for (let i of arr) {
//   // console.log("i",i)

//   if (obj[i]) {
//     obj[i] = obj[i] + 1;
//   } else {
//     obj[i] = 1;
//   }
// }

// let mostRepetedNumber;
// let count=0

// Object.keys(obj)?.map((i)=>{

//     if(obj[i]>count){
//         mostRepetedNumber=i,
//         count= obj[i]
//     }



// })

// console.log("mostRepetedNumber",mostRepetedNumber)


// // console.log(obj);


const str = "aabbccddeeefg";
let count=Infinity;
let nonrepeted=""
let feq={}

for(let i of str){

    if(feq[i]){
        feq[i]= feq[i]+1;

    }else{
        feq[i]=1;
    }

    if(feq[i]<count ){
        nonrepeted=i
        count=feq[i]
    }




}


console.log("nonrepeted",nonrepeted)
