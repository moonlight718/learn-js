function add(str1, str2) {
  const str1Arr = str1.split('').reverse();
  const str2Arr = str2.split('').reverse();

  let carry = 0;
  let len = Math.max(str1Arr.length, str2Arr.length);

  for (let i = 0; i < len; i++) {
    const num = (Number(str1Arr[i]) || 0) +  (Number(str2Arr[i]) || 0) + carry;
    str1Arr[i] = num % 10;
    carry = num > 9 ? 1 : 0;
  }
  carry && (str1Arr[len] = 1);
  return str1Arr.reverse().join('');
}

console.log(add('12344567', '3456'));