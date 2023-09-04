function searchMatrix(matrix: number[][], target: number): boolean {
  let width = matrix[matrix.length - 1].length;

  let left: number = 0,
    right = matrix.length * width - 1;

  while (left <= right) {
    let midPoint = Math.floor((right + left) / 2);

    let x = midPoint % width;
    let y = Math.floor(midPoint / width);

    if (matrix[y][x] === target) return true;
    else if (matrix[y][x] > target) {
      right = midPoint - 1;
    } else {
      left = midPoint + 1;
    }
  }

  return false;
}
