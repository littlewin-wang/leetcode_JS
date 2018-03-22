/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  let index, ret = [], len = nums.length

  index = nums.indexOf(target)

  if (index === -1) {
    return [-1, -1]
  }

  ret.push(index)

  for (let i = index + 1; i < len; i++) {
    if (nums.indexOf(target, i) !== -1) {
      index = nums.indexOf(target, i)
    }
  }

  ret.push(index)
  return ret
};
