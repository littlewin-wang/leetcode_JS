/**
* @param {number} n
* @return {number[]}
*/

var grayCode = function (n) {
  let res = [0]

  for (let i = 0; i < n; i++) {
    res = res.concat(res.map(item => (1 << i) + item).reverse())
  }
  return res
}