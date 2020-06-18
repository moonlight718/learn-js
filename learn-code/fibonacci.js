// const fibonacci = function fi(n) {
//   if (typeof n !== 'number') throw new Error(`${n} should be a number`);
//   if (n <= 0) return 0;
//   if (n === 1) return 1;
//   return fi(n - 1) + fi(n - 2);
// }

// console.log(fibonacci(6));

function fibonacci(n) {
  if (n <= 0) return 0;
  if (n === 1) return 1;
  let p = 0;
  let q = 1;
  let i = 2;
  let res;
  while ( i <= n) {
    res = p + q;
    p = q;
    q = res;
    i++;
  }
  return res;
}

console.log(fibonacci(0));
console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(6));