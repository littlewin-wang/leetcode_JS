/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  let hash = {}

  function getKey (str) {
    return str.split('').sort().join('')
  }

  strs.forEach(str => {
    let key = getKey(str)
    if (!hash[key]) {
      hash[key] = [str]
    } else {
      hash[key].push(str)
    }
  })

  return Object.keys(hash).map(key => hash[key])
};
