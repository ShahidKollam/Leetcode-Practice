/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    nums = nums.sort()
    let mid = Math.floor(nums.length / 2)
    let ans = nums[mid]
    return ans
};