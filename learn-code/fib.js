function fib (n) {
  let a = 0;
  let b = 1;
  let i = 0;
  while (i < n) {
    const num = (a + b) % 1000000007;
    a = b;
    b = num;
    i++;
  }
  return a;
}
console.log(fib(5));
