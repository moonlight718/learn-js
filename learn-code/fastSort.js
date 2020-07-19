function fastSort(arr) {
  _fastSort(arr, 0, arr.length - 1);
  return arr;
}

function _fastSort(arr, start, end) {
  if (start >= end) return;
  const center = partition(arr, start, end);

  _fastSort(arr, start, center - 1);
  _fastSort(arr, center + 1, end);
}

function partition(arr, start, end) {
  let pivot = arr[end];
  let i = start;
  for (let j = start; j < end; j++) {
    if (arr[j] < pivot) {
      if ( i !== j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
      i++;
    }
  }
  arr[end] = arr[i];
  arr[i] = pivot;
  return i;
}

console.log(fastSort([3,4,2,1,6,7,5,4,3,8,9]));