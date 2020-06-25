function printNumbers(n) {
  const maxNum = Math.pow(10, n) - 1;
  const arr = [];
  for (let i = 1; i <= maxNum; i++) {
    arr.push(i);
  }
  return arr;
}


console.log(printNumbers(2));