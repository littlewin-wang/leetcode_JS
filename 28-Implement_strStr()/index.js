/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

var strStr = function (haystack, needle) {
  return haystack.indexOf(needle)
};


// 以下实现的方法会时间溢出
var strStr = function (haystack, needle) {
  if (typeof haystack !== 'string' || typeof needle !== 'string') {
    return -1
  }

  if (haystack === needle || needle === '') {
    return 0
  }

  let i, j
  const len = haystack.length
  const miniLen = needle.length

  if (!len || !miniLen || miniLen > len) {
    return -1
  }

  for(i = 0; i < len; i++) {
    if (haystack[i] === needle[0]) {
      for (j = 1; j < miniLen; j++) {
        if (haystack[i + j] && haystack[i + j] === needle[j]) {
          continue
        } else {
          break
        }
      }

      if (j === miniLen) {
        return i
      }
    }
  }

  return -1
};