/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */

// 96 ms 官方API直接拿来用吧
// var myPow = function(x, n) {
//   return Math.pow(x, n)
// };

// 132 ms 自己写还要慢点
var myPow = function (x, n) {
  if (!n) {
    return 1
  }

  if (n < 0) {
    return 1 / myPow(x, -n)
  }

  if (n % 2) {
    return x * myPow(x, n - 1)
  } else {
    return myPow(x * x, n / 2)
  }
};
