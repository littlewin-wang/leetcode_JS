/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  let ret = Array(n)
  for (let i = 0; i < n; i++) {
    ret[i] = new Array(n)
  }

  let x = 0, y = 0, dx = 0, dy = 1
  for (let j = 1; j <= n * n; j++) {
    ret[x][y] = j

    // 每次转弯的时候做判断，转弯时x、y反向交换
    if (!isNaN(ret[Math.abs((x + dx) % n)][Math.abs((y + dy) % n)])) {
      [dx, dy] = [dy, -dx]
    }

    x += dx
    y += dy
  }

  return ret
};
