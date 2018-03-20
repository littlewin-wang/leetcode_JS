/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
function isValid (s, words) {
  if (!s || !words || !words.length) {
    return false
  }

  const len = words[0].length
  let s_arr = [], ret = true

  for (let i = 0; i < words.length; i++) {
    s_arr.push(s.slice(i * len, (i + 1) * len))
  }

  words.forEach(word => {
    let index = s_arr.findIndex(s => s === word)

    if (index !== -1) {
      s_arr.splice(index, 1)
    } else {
      ret = false
    }
  })

  return ret
}

var findSubstring = function (s, words) {
  if (!s || !words) {
    return []
  }

  const wordsCount = words.length,
        wordLen = words[0].length,
        wordsLen = wordsCount * wordLen
        start_end = s.length - wordsLen

  if (s.length < wordsLen) {
    return []
  }

  let ret = []

  for (let i = 0; i <= start_end; i++) {
    let word = s.slice(i, i + wordLen)

    if (words.indexOf(word) !== -1) {
      subStr = s.slice(i, i + wordsLen)
      if (isValid(subStr, words)) {
        ret.push(i)
      }
    }
  }

  return ret
};