function isPrime(num) {
  if (typeof num !== 'number') {
    throw new Error(`${num} should be a number`);
  }
  if (num === 2 || num === 3) return true;

  let i = 3;
  const maxI = Math.sqrt(num);
  while (i <= maxI) {
    if (num % i === 0) return false;
    i += 2;
  }
  return true;
}

console.log(isPrime(47));