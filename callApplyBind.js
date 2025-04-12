


let student1={
    name:"piyush",
    printName: function(...arg){

        console.log("arg",arg)
        console.log(`my name is  `)
    }
}

let student2={
    name:"priyadarshi"
}



// student1.printName.call(student2,26)




//for apply ==>

    // student1.printName.apply(student2,[26,"patna"])



    // for bind


let fun=   student1.printName.bind(student2,26)

fun()

