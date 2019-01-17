/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  let res = []

  const dfs = (sum, index, tmp) => {
    if (sum === target) {
      newTmp = tmp.concat()
      res.push(newTmp)
      return
    } else if (sum > target) {
      return
    }

    for (var i = index; i < candidates.length; i++) {
      newTmp = tmp.concat()
      newTmp.push(candidates[i])
      dfs(sum + candidates[i], i, newTmp)
    }
  }

  candidates.sort((a, b) => a > b)
  dfs(0, 0, [])

  return res
};