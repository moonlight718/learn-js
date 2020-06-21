function minDivisor(m, n) {
  const max = Math.max(m, n);
  const min = Math.min(m, n);

  for (let i = 1; i <= min; i++) {
    const res = i * max;
    if (res % min === 0) {
      return res;
    }
  }
}

console.log(minDivisor(20, 30));