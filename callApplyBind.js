


// let student1={
//     name:"piyush",
//     printName: function(city,age){
//         console.log("this==>",this)

//         console.log(`my name is ${this.name} & ${city} $ ${age}`)
//     }
// }

// let student2={
//     name:"priyadarshi"
// }

// student1.printName()

// student1.printName.call(student1,"patna",56)




//for apply ==>

    // student1.printName.apply(student2,[26,"patna"])



    // for bind


// let fun=   student1.printName.bind(student2,26)

// fun()




function showThis() {
  console.log( Object.keys(this));
}

showThis.call(42);  // Number object: [Number: 42]
showThis.call("hi"); // String object: [String: 'hi']
