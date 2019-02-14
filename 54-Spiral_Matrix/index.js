/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  let ret = []

  if (matrix.length && matrix[0] && matrix[0].length) {
    let rows = matrix.length
    let columns = matrix[0].length

    let x = 0, y = 0, dx = 0, dy = 1

    for (let i = 0; i < rows * columns; i++) {
      ret.push(matrix[x][y])
      matrix[x][y] = 0

      // 每次转弯的时候做判断，转弯时x、y反向交换
      if (matrix[Math.abs((x + dx) % rows)][Math.abs((y + dy) % columns)] === 0) {
        let temp = dx
        dx = dy
        dy = -temp
      }

      x += dx
      y += dy
    }
  }

  return ret
};