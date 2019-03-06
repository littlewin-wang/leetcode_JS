/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  var results = []
  dfs(0, [])
  return results

  function dfs (index, array) {
    if (array.length === k) {
      results.push(array)
      return
    }
    for (var i = index + 1; i <= n; i++) {
      dfs(i, array.concat(i))
    }
  }
}
