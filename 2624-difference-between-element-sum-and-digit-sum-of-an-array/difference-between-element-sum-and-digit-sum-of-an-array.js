/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function (nums) {
    let sum1 = 0
    let sum2 = 0

    for (let i = 0; i < nums.length; i++) {
        sum1 += nums[i]

        let num = nums[i]
        while (num > 0) {
            sum2 += num % 10
            num = Math.floor(num / 10)
        }
    }
    return sum1 - sum2
};