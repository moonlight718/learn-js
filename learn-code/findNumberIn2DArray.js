function findNumberIn2DArray(matrix, target) {
  if (!matrix || !matrix.length || !matrix[0].length) return false;

  const m = matrix.length;
  const n = matrix[0].length;
  
  let i = 0;
  let j = n - 1;


  while (i < m && j >= 0) {
    if (matrix[i][j] === target) return true;
    if (target > matrix[i][j]) {
      i++;
    } else {
      j--;
    }
  }
  
  return false;
}

const arr= [
  [ 1, 2, 3, 4, 5],
  [ 6, 7, 8, 9,10],
  [11,12,13,14,15],
  [16,17,18,19,20],
  [21,22,23,24,25]]

console.log(findNumberIn2DArray(arr, 14));
