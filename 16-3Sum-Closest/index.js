/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

const threeSumClosest = function (nums, target) {
  nums.sort((a, b) => a - b)
  let ret = 0, len = nums.length, min = Infinity

  for (let i = 0; i < len - 2; i++) {
    let [start, end] = [i + 1, len - 1]
    while (start < end) {
      let distance = Math.abs(nums[start] + nums[end] + nums[i] - target)
      if (distance < min) {
        min = distance
        ret = nums[start] + nums[end] + nums[i]
      }

      if (nums[start] + nums[end] + nums[i] < target) {
        start++
      } else {
        end--
      }
    }
  }

  return ret
}

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest1 = function (nums, target) {
  var min = Infinity;
  var res = 0;
  nums = nums.sort(sorting);

  for (var i = 0; i < nums.length - 2; i++) {
    if (nums[i - 1] !== undefined && nums[i - 1] === nums[i]) {
      continue;
    }
    var curr = nums[i];
    var m = i + 1;
    var n = nums.length - 1;
    while (m < n) {
      var tmp = Math.abs(nums[m] + nums[n] + curr - target);
      if (tmp < min) {
        min = tmp;
        res = nums[m] + nums[n] + curr;
      }

      if (nums[m] + nums[n] + curr < target) {
        m++;
      } else {
        n--;
      }
    }
  }
  return res;

  function sorting (a, b) {
    if (a > b) {
      return 1;
    } else if (a < b) {
      return -1;
    } else {
      return 0;
    }
  }
}

console.log(threeSumClosest([13, 2, 0, -14, -20, 19, 8, -5, -13, -3, 20, 15, 20, 5, 13, 14, -17, -7, 12, -6, 0, 20, -19, -1, -15, -2, 8, -2, -9, 13, 0, -3, -18, -9, -9, -19, 17, -14, -19, -4, -16, 2, 0, 9, 5, -7, -4, 20, 18, 9, 0, 12, -1, 10, -17, -11, 16, -13, -14, -3, 0, 2, -18, 2, 8, 20, -15, 3, -13, -12, -2, -19, 11, 11, -10, 1, 1, -10, -2, 12, 0, 17, -19, -7, 8, -19, -17, 5, -5, -10, 8, 0, -12, 4, 19, 2, 0, 12, 14, -9, 15, 7, 0, -16, -5, 16, -12, 0, 2, -16, 14, 18, 12, 13, 5, 0, 5, 6], -59))

console.log(threeSumClosest1([13, 2, 0, -14, -20, 19, 8, -5, -13, -3, 20, 15, 20, 5, 13, 14, -17, -7, 12, -6, 0, 20, -19, -1, -15, -2, 8, -2, -9, 13, 0, -3, -18, -9, -9, -19, 17, -14, -19, -4, -16, 2, 0, 9, 5, -7, -4, 20, 18, 9, 0, 12, -1, 10, -17, -11, 16, -13, -14, -3, 0, 2, -18, 2, 8, 20, -15, 3, -13, -12, -2, -19, 11, 11, -10, 1, 1, -10, -2, 12, 0, 17, -19, -7, 8, -19, -17, 5, -5, -10, 8, 0, -12, 4, 19, 2, 0, 12, 14, -9, 15, 7, 0, -16, -5, 16, -12, 0, 2, -16, 14, 18, 12, 13, 5, 0, 5, 6], -59))