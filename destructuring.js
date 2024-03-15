//destructing array
//splitting indicidual elements in the array to variables
let employee = ["Alice", "Wonderland", "female"];

let [fname, lname, gender] = employee;

let employee1 = ["Alice", "Wonderland"];

let [fname1, lname1, gender1] = employee1;

let [,,gen] = employee  //will only print gender

let[fn,...elements] = employee  // rest operator

console.log(fn) //Alice
console.log(elements) //['Wonderland','female']

console.log(fname);
console.log(lname);
console.log(gender);

console.log(fname1); //Alice
console.log(lname1); //Wonderland
console.log(gender1); //undefined



//destructuring objects
let e = {
    fn:"Janice",
    ln:"Smith",
    gn:"Neutral"
}

let {fn,ln,gn} = e;

console.log(fn)
console.log(ln)
console.log(gn)

//if the object properties were bigger length then an alias can be initialized
let {fn:f,ln:l,gn:g} = e
console.log(f)
console.log(l)
console.log(g)

