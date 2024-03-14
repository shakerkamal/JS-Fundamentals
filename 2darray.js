// let arr = new Array(6);

// for (let i = 0; i < arr.length; i++) {
//   arr[i] = new Array(6);
// }

// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr.length; j++) {
//     arr[i][j] = j;
//   }
// }
// for (let i = 0; i < 3; i++) {
//   for (let j = 0; j < 3; j++) {
//     arr[i][j] = j;
//   }
// }
let arr = [
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 0, 2, 4, 4, 0],
  [0, 0, 0, 2, 0, 0],
  [0, 0, 1, 2, 4, 0],
];

let max_Sum = Number.NEGATIVE_INFINITY;
let temp = [];
let ar = [];

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

for (let i = 0; i < 4; i++) {
  //console.log(arr[i]);
  for (let j = 0; j < 4; j++) {
    console.log(arr[i][j]);
    let temp_sum = 0;
    temp_sum += arr[i][j];
    temp_sum += arr[i][j + 1];
    temp_sum += arr[i][j + 2];
    temp_sum += arr[i + 1][j + 1];
    temp_sum += arr[i + 2][j];
    temp_sum += arr[i + 2][j + 1];
    temp_sum += arr[i + 2][j + 2];

    if (temp_sum > max_Sum) {
      //max_Sum = temp_sum;
      temp.push(temp_sum);
    }

    //console.log(temp_sum);
  }
}

temp = [...new Set(temp)];
len = temp.length;
max_Sum = temp[len - 1];
//console.log(temp);
console.log(max_Sum);

// for (let i = arr.length - 1; i >= 0; i--) {
//   for (let j = arr.length - 1; j >= 0; j--) {
//     if (i == j) {
//       console.log(arr[i][j]);
//     }
//   }
// }

//console.log(arr);
// b = [];
// for (let i = 0; i < 4; i++) {
//   a = [];
//   for (let j = 0; j < 4; j++) {
//     a.push(arr[i][j]);
//   }
//   b.push(a);
// }

// console.log(b);
