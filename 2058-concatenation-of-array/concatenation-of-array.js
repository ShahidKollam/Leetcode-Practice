/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function (nums) {

    const n = nums.length
    // nums.length = n * 2

    for (let i = 0; i < n; i++) {
        nums[n + i] = nums[i]
    }
    return nums
};