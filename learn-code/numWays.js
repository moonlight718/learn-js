function numWays(n) {
  let a = 1;
  let b = 2;

  for (let i = 1; i < n; i++) {
    const num = ( a + b ) / 1000000007;
    a = b;
    b = num;
  }

  return a;
}

console.log(numWays(1));
console.log(numWays(2));
console.log(numWays(3));
console.log(numWays(4));
console.log(numWays(5));