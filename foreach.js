let numbers = [1,2,3,4,5]

numbers.forEach(arrayFunction)

function arrayFunction(element, index, array){
    console.log("arr["+index+"]="+element)
}

let myMap = new Map([["fname","Shaker"],
                     ["lname","Kamal"]])

myMap.forEach(mapFunction)

function mapFunction(value, key, callingMap){
    console.log(key+ " " +value)
    console.log(myMap === callingMap)
}
