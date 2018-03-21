/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var search = function (nums, target) {
  var before = 0;
  var after = nums.length - 1;
  var mid;
  while (before < after - 1) {
    mid = before + Math.floor((after - before) / 2);
    if (nums[before] < nums[mid]) {
      if (target >= nums[before] && target <= nums[mid]) {
        after = mid;
      } else {
        before = mid;
      }
    } else {
      if (target >= nums[mid] && target <= nums[after]) {
        before = mid;
      } else {
        after = mid;
      }
    }
  }
  if (nums[before] === target) return before;
  if (nums[after] === target) return after;
  return -1;
};
