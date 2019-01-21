/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  if (!Array.isArray(nums) || !nums.length) {
    return []
  }

  if (nums.length > 1) {
    var ret = [], doneNum = {}
    nums.forEach((num, index) => {
      if (!doneNum[num]) {
        var permuteArr = permuteUnique(nums.slice(0, index).concat(nums.slice(index + 1)))
        permuteArr.forEach(arr => {
          arr.unshift(num)
          ret.push(arr)
        })
      }
      doneNum[num] = true
    })

    return ret
  } else {
    return [nums]
  }
};
