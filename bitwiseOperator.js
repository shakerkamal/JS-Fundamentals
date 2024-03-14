let n = 2;
let k = 2;
let maxanb = 0;
//let a = [];
//let uniq = [];
for (let i = 1; i <= n; i++) {
  for (let j = i + 1; j <= n; j++) {
    let res = i & j;
    if (res < k && res > maxanb) {
      maxanb = res;
    }
  }
}

console.log(maxanb);
//a.sort();
//console.log(a);

//uniq = [...new Set(a)];
//console.log(uniq);
//console.log(uniq.pop());

// function getMaxLessThanK(n, k) {
//   let max_anb = 0;
//   for (let b = n; b > 0; b--) {
//     for (let a = b - 1; a > 0; a--) {
//       if ((a & b) < k && (a & b) > max_anb) {
//         max_anb = a & b;
//       }
//     }
//   }
//   return max_anb;
// }

// console.log(getMaxLessThanK(2, 2));
