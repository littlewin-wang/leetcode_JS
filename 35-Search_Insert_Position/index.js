/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let arr = nums.concat()
  arr.push(target)

  // 去重和排序
  arr = Array.from(new Set(arr))
  arr.sort((a, b) => a - b)

  return arr.indexOf(target)
};