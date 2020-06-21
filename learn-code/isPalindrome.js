function isPalindrome(str) {
  let p = 0;
  let q = str.length - 1;

  while (p < q) {
    if (str[p++] !== str[q--]) return false;
  }

  return true;
}

console.log(isPalindrome('aabbaa'));