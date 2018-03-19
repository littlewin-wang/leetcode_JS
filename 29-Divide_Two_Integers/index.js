/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */

var divide = function (dividend, divisor) {
  var MAX_INT = 2147483647;
  var MIN_INT = -2147483648;

  if (dividend === 0 || divisor === 0) return 0;
  var sign = (dividend > 0 && divisor > 0) || (dividend < 0 && divisor < 0);
  var absDividend = Math.abs(dividend);
  var absDivisor = Math.abs(divisor);
  var result = 1;
  var current = absDivisor;
  var tempResult = 1;
  var tempCurrent = absDivisor;
  while (current <= absDividend) {
    if (current + tempCurrent > absDividend) {
      tempResult = 1;
      tempCurrent = absDivisor;
      result += tempResult;
      current += tempCurrent;
    } else {
      result += tempResult;
      current += tempCurrent;
      tempResult += tempResult;
      tempCurrent += tempCurrent;
    }
  }
  if (sign) {
    result = result - 1;
  } else {
    result = 1 - result;
  }
  if (result > MAX_INT || result < MIN_INT) return MAX_INT;
  return result;
};