function heapSort(arr) {
  const len = arr.length;
  for (let i = Math.floor(len / 2) - 1; i >= 0; i--) {
    buildHeap(arr,i, len - 1);
  }

  for (let i = 0; i < len; i++) {
    const temp = arr[0];
    arr[0] = arr[len - 1 - i];
    arr[len - 1 - i] = temp;
    buildHeap(arr, 0, len - 2 - i);
  }

  return arr;
}

function buildHeap(arr, rootIndex, maxIndex) {
  let i = rootIndex;
  let j = rootIndex * 2 + 1;

  while (j <= maxIndex) {
    if (j < maxIndex && arr[j] > arr[j + 1]) {
      j++;
    };

    if (arr[j] < arr[i]) {
      const temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      i = j;
      j = i * 2 + 1;
    } else {
      break;
    }
  }
}


console.log(heapSort([6,4,2,1,6,5,9,0,3]));