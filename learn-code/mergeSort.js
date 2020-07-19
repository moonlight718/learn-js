function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  return _mergeSort(arr, 0, arr.length - 1);
}

function _mergeSort(arr, start, end) {
  if (start === end) return [arr[start]];
  if (start > end) return [];
  const center = Math.floor(start + (end - start) / 2);
  const left = _mergeSort(arr, start, center);
  const right = _mergeSort(arr, center + 1, end);
  return merge(left, right);
}

function merge(left, right) {
  let res = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      res.push(left.shift());
    } else {
      res.push(right.shift());
    }
  }
  if (left.length) {
    res.push(...left);
  } else {
    res.push(...right);
  }
  
  return res;
}

console.log(mergeSort([3,6,7,1,3,2,7,4]));