
//to print special characters inside a string the format is "\special character\"

let s = "Hello world\nThis is new line\nthis character for new line is \"\\n\"" 
console.log(s)
// ``  -> known as backticks also known as template literals
console.log(`half of 100 is ${100 / 2}`)


//unary operator
// typeof only takes one value
console.log(typeof 4.5)
console.log(typeof 'c')
//binary operators
console.log(NaN == NaN)
console.log("Apple" == "Banana")

//ternary operators
console.log(true ? 1 : 2)
// -> 1
console.log(false ? 1 : 2)
// -> 2

//automatic type conversion

console.log("Automatic type Conversion: \n")

console.log(8 * null)
// → 0
console.log("5" - 1)
// → 4
console.log("5" + 1)
// → 51
console.log("five" * 2)
// → NaN
console.log(false == 0)
// → true


console.log("In JS null and undefined are the same thing")
console.log(null == undefined);
// → true
console.log(null == 0);
// → false

str = ""
for(let i= 1; i<=7 ; i++){
    str += "#"
    console.log(str)
}