function majorityElement(nums) {
  let n = nums.length;
  let i = 0;
  let x = -1;
  let sum = 0;
  while (i < n) {
    if (sum === 0) {
      x = nums[i];
    }
    if (x === nums[i]) {
      sum++;
    } else {
      sum--;
    }
    i++;
  } 
  return x;
}

console.log(majorityElement([1, 2, 3, 2, 2, 2, 5, 4, 2]));
