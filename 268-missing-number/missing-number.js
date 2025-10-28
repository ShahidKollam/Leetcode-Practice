/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
    let missing = 0;
    let sum = 0;
    // while (missing <= nums.length) {
    //     if (!nums.includes(missing)) return missing
    //     missing++
    // }
    for (let i = 0; i <= nums.length; i++) {
        console.log("i", i);
        if (nums[i]) {
            sum += nums[i];
        }
        missing += i;
    }
    console.log("sum", sum);
    console.log("missing", missing);

    return missing - sum;
};