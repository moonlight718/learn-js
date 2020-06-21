function findRepeatNumber (nums) {
  const set = new Set();
  for (let i = 0, len = nums.length; i < len; i++) {
    if (set.has(nums[i])) return nums[i];
    set.add(nums[i]);
  }
  return -1;
}
console.log(findRepeatNumber([2, 3, 1, 0, 2, 5, 3]));