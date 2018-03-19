/**
 * @param {string} digits
 * @return {string[]}
 */
const letterCombinations = function (digits) {
  const map = ["", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"]

  if (!digits) {
    return []
  }

  // 转换为对应数组
  const arr = digits.split('').map(n => map[parseInt(n)].split(''))

  const add = (arr) => {
    let ret = []

    // 取出最前面的子集
    let theArr = arr.shift()

    // 终止条件
    if (theArr) {
      let result = []

      // 剩余项为空[]
      if (arr.length === 0) {
        ret = theArr
      }
      // 剩余一项
      else if (arr.length === 1) {
        result = arr[0]
      } else {
        // TIP 注意递归时arr.concat做一下数组的深拷贝，
        result = add(arr.concat())
      }

      if (theArr.length && result.length) {
        theArr.map(t => {
          result.map(a => {
            ret.push(t.concat(a))
          })
        })
      } else {
        ret = result.length ? result : theArr
      }
    }

    return ret
  }

  return add(arr)
}