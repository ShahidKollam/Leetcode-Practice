/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function (nums) {
    // let sum = nums.reduce((acc, val) => (acc += val), 0)
    let sum = 0
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
    }
    let digisum = 0
    for (let i = 0; i < nums.length; i++) {
        let newSum = 0
        if (nums[i] > 9) {
            let str = nums[i].toString()

            for (let i = 0; i < str.length; i++) {
                newSum += Number(str[i])
            }
            digisum += newSum
        } else {
            digisum += nums[i]
        }
    }
    return sum - digisum
};