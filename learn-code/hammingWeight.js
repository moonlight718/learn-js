function hammingWeight(n) {
  let count = 0;
  while (n) {
    count++;
    n &= n -1;
  }
  return count;
}


console.log(hammingWeight(0));
console.log(hammingWeight(1));
console.log(hammingWeight(2));
console.log(hammingWeight(3));
console.log(hammingWeight(9));