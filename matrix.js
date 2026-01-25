let matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

function fun(matrix) {
  let result = [];
  let top = 0; //0
  let bottom = matrix.length - 1; //3
  let left = 0; //0
  let right = matrix[0].length - 1; //3

  while (top <= bottom && left <= right) {
    for (let col = 0; col <= right; col++) {
      result.push(matrix[top][col]);
    }
    top++;

    for (let row = top; row <= bottom; row++) {
      result.push(matrix[row][right]);
    }
    right--; //2

    if (top <= bottom) {
      for (let col = right; col >= left; col--) {
        result.push(matrix[bottom][col]);
      }

      bottom--;
    }

    if (top <= bottom) {
      for (let row = bottom; row <= bottom; row++) {
        result.push(matrix[row][left]);
      }
      left++;
    }
  }

  return result;
}

let result = fun(matrix);

console.log("result", result);
