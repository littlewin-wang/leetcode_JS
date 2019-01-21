/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  if (!Array.isArray(nums) || !nums.length) {
    return []
  }

  if (nums.length > 1) {
    var ret = []
    nums.forEach((num, index) => {
      var permuteArr = permute(nums.slice(0, index).concat(nums.slice(index + 1)))
      permuteArr.forEach(arr => {
        arr.unshift(num)
        ret.push(arr)
      })
    })

    return ret
  } else {
    return [nums]
  }
};