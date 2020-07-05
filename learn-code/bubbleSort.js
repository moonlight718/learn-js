function bubbleSort(arr) {
  if (!arr || !arr.length) return arr;

  for (let i = 0, len = arr.length; i < len; i++) {
    let flag = false;
    for (let j = 1; j < len - i; j++) {
      if (arr[j - 1] > arr[j]) {
        const temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
        flag = true;
      }
    }
    // 如果某一轮已经没有可交换的原始，则直接跳出循环
    if (!flag) break;
  }
  return arr;
}

console.log(bubbleSort([5,3,1,4,2]));