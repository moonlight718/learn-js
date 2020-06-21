function movingCount(m, n, k) {
  let count = 0;
  for (let i = 0; i < m; i++) {
    if (i > k) break;
    for (let j = 0; j < n; j++) {
      if(j > k) break;
      if (splitNumSum(i) + splitNumSum(j) <= k) {
        count++;
      }
    }
  }
  return count;
}

function splitNumSum (num) {
  const a = num % 10;
  const b = (Math.floor(num / 10)) % 10;
  console.log(num, a + b);
  return a + b; 
}

console.log(movingCount(16,8,4));