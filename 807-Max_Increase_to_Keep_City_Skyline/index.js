/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxIncreaseKeepingSkyline = function (grid) {
  let len = grid.length
      maxColumn = []
      ret = 0

  for (let i = 0; i < len; i++) {
    let max = 0
    for (let j = 0; j < len; j++) {
      if (grid[j][i] > max) {
        max = grid[j][i]
      }
    }
    maxColumn.push(max)
  }

  for (let i = 0; i < len; i++) {
    let maxRow = Math.max.apply(Math, grid[i])
    
    for (let j = 0; j < len; j++) {
      let max = Math.min(maxRow, maxColumn[j])

      ret += max - grid[i][j]
    }
  }

  return ret
};