//used to loop over iterables
let cars = ["Audi", "BMW", "VW", "Honda"];

//conventional index thing
for (let index in cars) {
  console.log(cars[index]);
}

//it directly access the element rather than the index
for (let car of cars) {
  console.log(car);
}

let string = "What a beautiful day";

for (let word of string) {
  console.log(word);
}
