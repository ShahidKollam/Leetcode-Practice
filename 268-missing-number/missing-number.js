/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
    let missing = 0
    while (missing <= nums.length) {
        if (!nums.includes(missing)) return missing
        missing++
    }
};