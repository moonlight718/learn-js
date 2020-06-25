function myPow(x, n) {
  if (x === 0) return 0;

  if (n < 0) {
    x = 1 / x;
    n = -n;
  }
  let res = 1;
  while(n) {
    if (n & 1) {
      res *= x;
    }
    n >>= 1;
    x *= x;
  }
  return res;
}

console.log(myPow(2,10));