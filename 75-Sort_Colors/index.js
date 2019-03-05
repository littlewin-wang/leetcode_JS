/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  // only one-pass algorithm, unshift 'RED' => HEAD & push 'BLUE' => tail
  for (let i = 0, done = 0, len = nums.length; done < len; done++) {
    if (!nums[i]) {
      let [red] = nums.splice(i, 1)
      nums.unshift(red)
      i++
    } else if (nums[i] === 2) {
      let [blue] = nums.splice(i, 1)
      nums.push(blue)
    } else {
      i++
    }
  }
};
