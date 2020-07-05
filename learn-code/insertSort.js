function insertSort(arr) {
  if (arr.length <= 1) return arr;

  for (let i = 1, len = arr.length; i < len; i++) {
    const value = arr[i];
    let j = i - 1;
    for (; j >= 0; j--) {
      if (arr[j] > value) {
        arr[j + 1] = arr[j];
      } else {
        break;
      }
    }
    arr[j + 1] = value;
  }

  return arr;
}

function shellSort(arr) {
  if (arr.length <= 1) return arr;

  for (let d = Math.floor(arr.length / 2); d >= 1; d = Math.floor(d / 2)) {
    for (let i = d; i < arr.length; i++) {
      const value = arr[i];
      let j = i - d;
      for (;j >= 0; j++) {
        if (value < arr[j]) {
          arr[j + d] = arr[j];
        } else {
          break;
        }
      }
      arr[j + d] = value;
    }
  }
}

console.log(insertSort([49, 38, 65, 97, 76, 13, 27, 49, 55, 4]));