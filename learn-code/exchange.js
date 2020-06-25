function exchange(nums) {
  let p = 0;
  let q = nums.length - 1; 

  while (p < q) {
    if (!(nums[p] & 1) && (nums[q] & 1)) {
      const temp = nums[p];
      nums[p] = nums[q];
      nums[q] = temp;
      p++;
      q--;
    }
    if (nums[p] & 1) {
      p++;
    }
    if(!(nums[q] & 1)){
      q--;
    }
  }
  return nums;
}

const arr= [2,13,4,5,6,1,2,4,3,2];

console.log(exchange(arr));