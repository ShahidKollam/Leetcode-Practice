/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberGame = function (nums) {
    let ans = []
    nums = nums.sort((a, b) => a - b)
    for (let i = 0; i < nums.length - 1; i += 2) {
        let alice = nums[i]
        let bob = nums[i + 1]

        ans.push(bob)
        ans.push(alice)
    }
    return ans
};