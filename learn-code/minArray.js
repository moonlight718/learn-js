function minArray(arr) {
  const len = arr.length;
  let start = 0;
  let end = len - 1;
  
  while (start < end) {
    const mid = Math.floor(start + ( end - start) / 2);
    if (arr[mid] > arr[end]) {
      start = mid + 1;
    } else if (arr[mid] < arr[end]) {
      end = mid;
    } else {
      end--;
    }
  }
  return arr[start];
}

console.log(minArray([1,0]));