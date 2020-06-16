function hexToRGB(string) {
  if (!/(^\#([a-fA-F0-9]{3})$)|(^\#([a-fA-F0-9]{6})$)/g.test(string)) return null;
  const rgb = [];
  if (string.length === 4) {
    for (let i = 1; i < string.length; i++) {
      rgb.push(parseInt(`${string[i]}${string[i]}`, 16));
    }
  } else {
    for (let i = 1; i < string.length; i+= 2) {
      rgb.push(parseInt(`${string[i]}${string[i + 1]}`, 16));
    }
  }
  return `rgb(${rgb.join(', ')})`;
}

console.log(hexToRGB('#f0f0f0'));
console.log(hexToRGB('#F0F0F0'));
console.log(hexToRGB('#9fc'));
console.log(hexToRGB('无效颜色'));