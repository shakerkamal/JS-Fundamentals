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
Breaks down the array and does different operations with individual items of the array and returns the result

it takes two parameters reduce((parameter, theArray) = {}, intialValueOfTheParameter)
*/

const total = items.reduce((currentTotal, items) => {
    return items.Price + currentTotal
}, 0)

console.log(total)

// const avg = items.reduce((currentTotal, items) => {
//     return items.Price + currentTotal
// }, 0)

// console.log(avg);