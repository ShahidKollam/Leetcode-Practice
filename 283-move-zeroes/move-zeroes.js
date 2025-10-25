/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
 let left = 0; // Pointer 1 — marks where the next non-zero should go

    for (let right = 0; right < nums.length; right++) { // Pointer 2 — scans the array
        if (nums[right] !== 0) {
            // Swap elements
            [nums[left], nums[right]] = [nums[right], nums[left]];
            left++;
        }
    }
};