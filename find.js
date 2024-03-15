const items = [
    {name: 'Bike', Price: 115500},
    {name: 'TV', Price: 31500},
    {name: 'Laptop', Price: 125500},
    {name: 'Laptop', Price: 155500},
    {name: 'MacBook Pro', Price: 215500},
    {name: 'Washing Machine', Price: 26500},
    {name: 'iPhone 12', Price: 95500},
    {name: 'Keyboard', Price: 1500},
    {name: 'Nvidia GTX3070', Price: 55000},
    {name: 'Yamaha MT15', Price: 415500},
    {name: 'Honda Civic', Price: 4115500}
]



/* Returns the very first item that it finds to be ture,
if there are multiple items with the same property then it will return the first one 
*/
const findItem = items.find((item) => {
    return item.name === 'Laptop'
});

console.log(findItem)