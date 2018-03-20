/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
  let dp = [], len = s.length
  let maxLen = 0

  for(let i = 0; i < len; i++) {
    dp.push(0)
  }

  for(let i = len - 2; i >= 0; i--) {
    if (s[i] === '(') {
      let end = i + dp[i + 1] + 1

      if (end < len && s[end] === ')') {
        dp[i] = dp[i + 1] + 2

        if (end + 1 < len) {
          dp[i] += dp[end + 1]
        }
      }
    }

    maxLen = Math.max(maxLen, dp[i])
  }

  return maxLen
}
