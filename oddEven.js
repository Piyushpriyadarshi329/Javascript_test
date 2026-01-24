let arr= [10, 20, 30, 40, 50, 60];
//“Get the numbers at odd indexes and place them at even index positions”

function oddEven(arr){
    let evenArr= new Array(arr.length).fill("-");
    console.log(evenArr);
    let evenIndex=0;
    for(let i=1;i<arr?.length;i+=2){

        evenArr[evenIndex]=arr[i];
        evenIndex+=2;
    }
    return evenArr;
}



let result=oddEven(arr);
console.log(result);