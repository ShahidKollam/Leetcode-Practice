/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    let map = new Map()
    for (let n of nums) {
        if (map.has(n)) map.set(n, map.get(n) + 1)
        else map.set(n, 1)
    }
    for (let [key, val] of map) {
        if (val === 1) return key
    }
};