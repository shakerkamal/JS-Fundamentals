//generator is a special function
//capable of pausing and resuming execution
//with the help of yield functions

function *createGenerator(){
    yield 1;
    console.log("After 1st yield")
    yield 2;
}

let myGen = createGenerator();

console.log(myGen.next())
console.log(myGen.next())
console.log(myGen.next())