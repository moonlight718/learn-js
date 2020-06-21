function maxDivisor (m, n) {
  const min = Math.min(m, n);
  const max = Math.max(m, n);

  for (let i = min; i >= 1; i--) {
    if (max % i === 0 && min % i === 0) return i;
  }
  return 1;
}

console.log(maxDivisor(30, 20));