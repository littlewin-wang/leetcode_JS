/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function (J, S) {
  let len = S.length,
      ret = 0

  for(let i = 0; i < len; i++) {
    if(J.indexOf(S[i]) !== -1) {
      ret++
    }
  }

  return ret
};