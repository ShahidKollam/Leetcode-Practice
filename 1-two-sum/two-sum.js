/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let map = new Map()
    let i = 0
    for (let n of nums) {
        let complement = target - n
        if (map.has(complement)) {
            return [i, map.get(complement)]
        }
        map.set(n, i)
        i++
    }
};