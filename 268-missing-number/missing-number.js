/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
    let n = nums.length
    let expectedSum = n * (n + 1) / 2
    let arraysum = nums.reduce((acc, val) => acc += val, 0)
    return expectedSum - arraysum
};