//sets are array of unique elements
let mySet = new Set()

let ob1 = {greet : "Hello"}
let ob2 = {greet : "Hello"}
console.log(ob1 == ob2)  //---> returns false
mySet.add(1)
mySet.add(2)
mySet.add(ob1)
mySet.add(ob2)
console.log(mySet.size)
//check if any element present in the set
console.log(mySet.has(1))  //---> true
//delete
console.log(mySet.delete(ob1))  //---> 1,2,ob2
console.log(mySet)

//WEAK SETS
//it can only store object references and non primitive values
//better for garbage collection
let set = new WeakSet()
let key = {}
set.add(key)
console.log(set.has(key))
key = null;

const items = [
    {name: 'Bike', Price: 115500},
    {name: 'TV', Price: 31500},
    {name: 'Laptop', Price: 125500},
    {name: 'MacBook Pro', Price: 215500},
    {name: 'Washing Machine', Price: 26500},
    {name: 'iPhone 12', Price: 95500},
    {name: 'Keyboard', Price: 1500},
    {name: 'Nvidia GTX3070', Price: 55000},
    {name: 'Yamaha MT15', Price: 415500},
    {name: 'Honda Civic', Price: 4115500}
]


/* 
The Map fuction checks for properties inside the array of objects
if we want to get all the item names or price for the above example we can do that pretty easily using map function
*/

const mappedName = items.map((item) => {
    return item.name
});

const mappedPrice = items.map((item) => {
    return item.Price
    
})

console.log(mappedName)
console.log(mappedPrice)