/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = function (nums, number) {
  nums.sort((a, b) => a - b)

  let ans = []
  let len = nums.length

  // enumerate the array, and assume the item to be the smallest one
  for (let i = 0; i < len; i++) {

    // have already enumerate the item as the smallest one among the three
    // then continue
    if (i && nums[i] === nums[i - 1]) continue

    // the sum of another two should be
    let target = number - nums[i]

    // the indexes of another two 
    let [start, end] = [i + 1, len - 1]

    while (start < end) {
      let sum = nums[start] + nums[end]

      if (sum > target) {
        end--
      } else if (sum < target) {
        start++
      } else {
        ans.push([nums[i], nums[start], nums[end]])

        // remove the duplication
        while (nums[start] === nums[start + 1])
          start++
        start++

        // remove the duplication
        while (nums[end] === nums[end - 1])
          end--
        end--
      }
    }
  }

  return ans
}

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
const fourSum = function (nums, target) {
  nums.sort((a, b) => a - b)
  let ret = []
  let restNums = nums.concat()

  nums.map((n, index) => {
    restNums.splice(0, 1)

    if (index > 0 && n === nums[index - 1]) return

    if (restNums.length >= 3) {
      let result = threeSum(restNums, target - n)
      result.map(r => {
        r.unshift(n)
        ret.push(r)
      })
    }
  })

  return ret
}

console.log(fourSum([1, 0, -1, 0, -2, 2], 0))
