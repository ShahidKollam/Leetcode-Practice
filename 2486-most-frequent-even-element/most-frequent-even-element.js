/**
 * @param {number[]} nums
 * @return {number}
 */
var mostFrequentEven = function (nums) {
    let map = new Map()
    let freq = 0
    let small = -1
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 === 0) {
            map.set(nums[i], (map.get(nums[i]) || 0) + 1)

            let count = map.get(nums[i])
            if (count > freq) {
                freq = count
                small = nums[i]
            } else if (count === freq) {
                if (nums[i] < small) {
                    small = nums[i]
                }
            }
        }
    }
    return small
};