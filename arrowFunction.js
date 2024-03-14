//regular function
var getValue = function () {
  return 10;
};

//arrow function
const getValue = () => {
  return 10;
};

//when there is only a single line
//to be executed inside the function
//we can remove the curly braces
const getValue = () => 10;

//passing single parameter
const getValue = (m) => 10 * m;

//or
const getValue = (m) => 10 * m;

//for multiple parameters use braces
const getValue = (m, extra) => 10 * m + extra;

//with multiple lines
const swapNumbers = (num1, num2) => {
  num1 = num1 + num2;
  num2 = num1 - num2;
  num1 = num1 - num2;
  res = "num1" + " " + "num2";
  return res;
};

console.log(swapNumbers(5, 10));
