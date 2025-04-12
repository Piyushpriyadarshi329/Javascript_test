


let concurrency=1;
let waitingQueue=[];
let runningTask=0


function taskRunner(){



}


async function addTask(task){
    if(runningTask<concurrency){
        runningTask++
      let result= await  task()
      runningTask--
      if(runningTask<concurrency&& waitingQueue.length>0)
        addTask(waitingQueue.shift())

    }else{
        waitingQueue.push(task)

    }



}






addTask(async ()=>{
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                console.log("task1")
                resolve("task1")
            },3000)
           

        })
})


addTask(async ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("task2")
            resolve("task2")
        },3000)
       

    })
})
addTask(async ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("task3")
            resolve("task3")
        },3000)
       

    })
})


addTask(async ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("task4")
            resolve("task4")
        },3000)
       

    })
})

addTask(async ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("task5")
            resolve("task5")
        },3000)
       

    })
})