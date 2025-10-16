/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function (nums) {
    let sum1 = 0
    let sum2 = 0

    for (let i = 0; i < nums.length; i++) {
        sum1 += nums[i]

        if (nums[i] > 9) {
            let str = nums[i].toString()
            let sum = 0
            for (let i = 0; i < str.length; i++) {
                sum += Number(str[i])
            }
            sum2 += sum
        } else {
            sum2 += nums[i]
        }
    }

    return sum1 - sum2
};