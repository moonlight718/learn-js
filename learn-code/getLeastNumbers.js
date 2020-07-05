function getLeastNumbers(arr, k) {
  if (!k) return [];
  const barrel = [];
  for (let i = 0, len = arr.length; i < len; i++) {
    const count = (barrel[arr[i]] || 0) + 1;
    barrel[arr[i]] = count;
  }
  const res = [];
  for (let i = 0; i <= 10000; i++) {
    let count = barrel[i] || 0;
    while (count) {
      res.push(i);
      if (res.length === k) return res;
      count--;
    }
  }
  return res;
}
console.log(getLeastNumbers([0,1,2,1], 3));