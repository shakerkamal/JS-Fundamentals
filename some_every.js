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
The some function unlike other higher order functions returns a boolean value
*/
const hasinExpensive = items.some(item => {
    return item.Price < 00000
});

console.log(hasinExpensive);

/*
Returns boolean vlaue by checking every items inside an array 
*/
const hasAnyExpensive = items.every(item => {
    return item.Price < 10000
});

console.log(hasAnyExpensive);