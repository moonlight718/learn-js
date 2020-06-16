function toChineseNum(number = 0) {
  const unitArr = ['', '十', '百', '千', '万'];
  const numTransArr = ['', '一', '二', '三', '四', '五', '六', '七', '八', '九'];
  const numArr = String(number).split('').reverse();

  const transArr = [];
  let preZero = false;
  for (let i = numArr.length - 1; i >= 0; i--) {
    const item = Number(numArr[i]);
    const unit = unitArr[i];
    const num = numTransArr[item];
    
    if (item === 0) {
      if (!preZero) {
        transArr.push('零');
      }
      preZero = true;
      continue;
    }
    if (i === 1 && item === 1) {
      transArr.push(unit);
    } else {
      transArr.push(num + unit);
    }
    preZero = false;
  }
  if (transArr.length > 1 && transArr[transArr.length - 1] === '零') {
    transArr.pop();
  }

  return transArr.join('');
}

console.log(toChineseNum(31));