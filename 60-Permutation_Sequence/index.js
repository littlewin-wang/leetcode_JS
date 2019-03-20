/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
// 函数记忆优化
var memoize = function (fn, hasher) {
  var memoize = function (key) {
    var cache = memoize.cache
    var address = '' + (hasher ? hasher.apply(this, arguments) : key)
    if (!cache[address]) {
      cache[address] = fn.apply(this, arguments)
    }
    return cache[address]
  }
  memoize.cache = {}
  return memoize
}

var fibonacci = function (n) {
  return n <= 1 ? 1 : n * fibonacci(n - 1)
}

fibonacci = memoize(fibonacci)

var getPermutation = function (n, k) {
  var set = Array.from(new Array(n), (val, index) => index + 1)  // [1,2,3,...,n]
  var ret = []
  var index = k - 1

  // 按阶乘依次遍历，从上面的set数组中依次出值
  for (var i = 0; i < n; i++) {
    var idx = Math.floor(index / fibonacci(n - 1 - i))
    ret.push(...set.splice(idx, 1))
    index = index % fibonacci(n - 1 - i)
  }


  return ret.join('')
}
