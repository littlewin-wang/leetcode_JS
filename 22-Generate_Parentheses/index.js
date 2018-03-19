/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const generate = (left, right, arr, s) => {
    // 退出条件
    if (!left && !right) {
      arr.push(s)
      return
    }

    // 左右相等时，只能添加左
    if (left === right) {
      generate(left - 1, right, arr, s + '(')
    }
    // 左为零，只能添加右
    else if (left === 0) {
      generate(left, right - 1, arr, s + ')')
    }
    // 可以添加左或者右
    else {
      generate(left - 1, right, arr, s + '(')
      generate(left, right - 1, arr, s + ')')
    }
  }


  let ret = []
  generate(n, n, ret, '')
  return ret
}