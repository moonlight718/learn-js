function selectSort(arr) {
  if (arr.length <= 1) return arr;

  for (let i = 0, len = arr.length; i < len; i++) {
    const temp = arr[i];
    let minIndex = i;
    for (j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (i !== minIndex) {
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
    
  }
  return arr;
}

console.log(selectSort([4,5,1,3,2]));