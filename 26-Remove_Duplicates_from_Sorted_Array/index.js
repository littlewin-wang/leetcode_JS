/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  // nums为空数组
  if (nums === null || nums.length === 0) 
    return 0

  // nums为单一元素数组
  if (nums.length == 1) 
    return 1

  let count = 0, len = nums.length

  for (let i = 0; i < len; i++) {
    if (nums[i] != nums[i + 1]) {
      count++;
      nums[count] = nums[i + 1]
    }
  }

  return count
};