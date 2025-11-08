/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    // nums = nums.sort()
    // let mid = Math.floor(nums.length / 2)
    // return nums[mid]
    let count = 0
    let candidate = nums[0]
    for (let i = 0; i < nums.length; i++) {
        if (count === 0) {
            count++
            candidate = nums[i]
        } else if (candidate === nums[i]) {
            count++
        } else {
            count--
        }
    }
    return candidate
};