function spiralOrder(arr) {
  if (!arr || !arr.length || !arr[0].length) return arr;
  const m = arr.length;
  const n = arr[0].length;
  let top = 0; let left = 0; let bottom = m - 1; let right = n - 1;
  const res = [];
  while (left <= right && top <= bottom) {
    for (let j = left; j <= right; j++) {
      res.push(arr[top][j]);
    }
    for (let i = top + 1; i <= bottom; i++) {
      res.push(arr[i][right]);
    } 
    if (left < right && top < bottom) {
      for (let j = right - 1; j >= left; j--) {
        res.push(arr[bottom][j]);
      }
      for (let i = bottom - 1; i > top; i--) {
        res.push(arr[i][left]);
      }
    }

    left++;
    top++;
    bottom--;
    right--;
  }
  return res;
}

console.log(spiralOrder([
  [1,2,3,4],
]));