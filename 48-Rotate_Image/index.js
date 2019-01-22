/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  // input check
  const len = matrix.length

  // turn around x-aixs
  matrix.forEach(line => {
    for (let i = 0; i < len / 2; i++) {
      let temp = line[i]
      line[i] = line[len - 1 - i]
      line[len - 1 - i] = temp
    }
  })

  // turn around y=x
  matrix.forEach((line, x) => {
    for (let y = 0; y < (len - 1 - x); y++) {
      let temp = matrix[x][y]
      matrix[x][y] = matrix[len - 1 - y][len - 1 - x]
      matrix[len - 1 - y][len - 1 - x] = temp
    }
  })
};
