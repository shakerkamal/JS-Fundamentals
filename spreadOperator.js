
let displayColor = function (message, ...colors) {
    console.log(message);
    for (let i in colors) {
      console.log(colors[i]);
    }
  };

//rest operator is declared in function declaration
//spread operator is paased in function call
let message = "List of Colors"
let colorArray = ["orange", "yellow", "indigo"];

//spread operator takes an array and splits it into individual elements
displayColor(message, ...colorArray)
