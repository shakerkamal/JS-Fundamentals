//rest parameter represents an indefinite
//amount of parameter in an array

let displayColor = function (message, ...colors) {
  console.log(message);
  //arguments object gets the parameters paased in the function
  //   for (let i in arguments) {
  //     console.log(arguments[i]);
  //   }
  for (let i in colors) {
    console.log(colors[i]);
  }
};

let message = "List of colors";

displayColor(message, "red");
displayColor(message, "red", "blue");
displayColor(message, "red", "blue", "green");



