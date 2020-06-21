function islandCount(arr) {
  let count = 0;

  for (let i = 0, lenX = arr.length; i < lenX; i++) {
    for (let j = 0, lenY = arr[0].length; j < lenY; j++) {
      if (arr[i][j] === 1) {
        count++;
        clearLand(arr, i, j, lenX, lenY);
      }
    }
  }
  return count;
}

function clearLand(arr, i, j, lenX, lenY) {
  if (i < 0 || j < 0 || i >= lenX || j >= lenY || arr[i][j] !== 1) return;
  arr[i][j] = 2;
  clearLand(arr, i, j - 1, lenX, lenY); // 左
  clearLand(arr, i + 1, j, lenX, lenY); // 下
  clearLand(arr, i, j + 1, lenX, lenY); // 右
  clearLand(arr, i - 1, j, lenX, lenY); // 上
}
let arrIsland = [
	[0,0,1,0,1,0],
	[1,1,1,0,1,0],
	[1,0,0,1,0,0],
	[0,0,0,0,0,1]
];
console.log(islandCount(arrIsland));  


