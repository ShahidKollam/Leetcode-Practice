/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function (nums) {
    let digisum = nums.reduce((acc, val) => acc += val, 0)

    let arrsum = 0
    for (let i = 0; i < nums.length; i++) {
        let sum = String(nums[i]).split('').reduce((acc, val) => acc += Number(val), 0)
            arrsum += sum
       
    }
    return digisum - arrsum
};