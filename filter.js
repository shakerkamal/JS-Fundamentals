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


//filtering items by price less than 60000 
const filteredItems = items.filter((item) => {
    return item.Price <= 60000;
});

console.log(filteredItems);


//filtering without using filter method
function filterItem (items, param) {
    let itemstoFilter =[]
    items.forEach(item => {
        //console.log(item.Price)
        if(item.Price<=param)
        {
            itemstoFilter.push(item)
        }
    });
    console.log(itemstoFilter);
}

const res = filterItem(items, 60000);