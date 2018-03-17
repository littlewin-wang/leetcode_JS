/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  // nums为空数组
  if (nums === null || nums.length === 0)
    return 0

  let count = 0, len = nums.length

  for (let i = 0; i < len; i++) {
    if (nums[i] !== val) {
      nums[count] = nums[i]
      count++;
    }
  }

  return count
};
