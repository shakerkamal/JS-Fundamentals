//var declaration has functional scope, it can be called from anywhere inside the function

function greetPerson(name){
    //var greet;
    if (name === "Marin") var greet = "Hi Marin!"
    else var greet = "Hi there"
    console.log(greet)
}

//let declaration within a block scope
// function letGreetPerson(name){
//     //let greet;   
//     if (name === "Marin") {
//         let greet = "Hi Marin!"
//     }
//     else {
//         let greet = "Hi there"
//     }
//     console.log(greet) // generates an error greet undefined because it was defined within if statement block
// }

// greetPerson("Shaker")
// letGreetPerson("Marin")

var a = 1;
var b = 2;
if(a === 1){
    var a = 10
    let b = 20 //it is within if block
    console.log(a, b)  // 10, 20
}
console.log(a,b) // 10, 2

//var declaration with same name is ok
var c = 1
var c = 2

// let declartion with same name will give errors
let d = 1
//let d = 2 // it will show an error while compiling

//const keyword

console.log("const keyword")

const name = "Chandler"  // const variables cannot be reassigned
//name = "Ross"

const obj = {
    value : 23
}
console.log(obj.value)

obj = {} // it creates an error

//const object can not be reasigned but the variables inside it can be assigned/changed
obj.value = 15

console.log(obj.value)