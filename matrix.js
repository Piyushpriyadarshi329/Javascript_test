// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(resolve,500,"hello1")

//   });

//   const promise2 = new Promise((resolve, reject) => {
//     setTimeout(resolve,400,"hello2")

//   });

//   Promise.race([promise1, promise2]).then(result => {
//     console.log(result); // Output: "hello" (from promise2)
//   });

// (()=>{
//     let x= (y=10)
// })()

// console.log(typeof x)
// console.log(typeof y)



let matrix = [
    [1,  2,  3,  4],
    [5,  6,  7,  8],
    [9,  10, 11, 12],
    [13, 14, 15, 16],
  ];
  let m= matrix.length;
  let n= matrix[0].length
  let RotateMatrix=[]
  
  
  let sprialmatrix=[]
  let horizantal=true
  let forward=true
  
  for(let i=0;i<m;i++){
      for(let j=i;j<n;j++){
          if(forward){
              if(horizantal){
                  sprialmatrix.push(matrix[i][j])
              }else{
                  sprialmatrix.push(matrix[j][m-i-1])
       
              }
          }else{
              if(horizantal){
                  sprialmatrix.push(matrix[i][j])
              }else{
                  sprialmatrix.push(matrix[j][m-i-1])
       
              } 
          }
          
          if(!horizantal){
              forward=!forward
          }
          horizantal=!horizantal
  
      }
  }
  
  
  
  // var transposematrix=[]
  // for(let i=0;i<n;i++){
  //     transposematrix[i]=[]
  //     for(let j=0;j<m;j++){
  //         transposematrix[i][j]=matrix[j][i]
  //     }
  // }
  // console.log("transposematrix",transposematrix)
  
  
  
  
  
  console.log("RotateMatrix",RotateMatrix)