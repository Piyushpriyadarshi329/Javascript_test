// const regex = /hello/gi; // Matches the word "hello"
const regex= /([0-5]{4}|[6-9]{4})/g

//dijpp3178g
const panRegex= /[A-Z]{4}[P]{1}[0-9]{4}[A-Z]{1}/
const regex3= /^[A-Z]+$/



const Panregex  =   /[A-Z]{4}[P]{1}[0-9]{4}[A-Z]{1}/

const regex4= /^abc.*\d$/

//ABCDP1234X
//DIFGP3156S
// const hashtagRegex = /#[a-zA-Z0-9]+/g
// const hashtagRegex = /^[A-Z]/g
const fileExtension =   /^.*(.png|.jpeg|.gif)$/

const sentence = "This is #awesome and #regex is great!";
// console.log(sentence.match(hashtagRegex))
console.log(fileExtension.test("abc.png"))

// console.log(("heLlo worls hellO1 77").match(regex))


