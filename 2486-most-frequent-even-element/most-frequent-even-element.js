/**
 * @param {number[]} nums
 * @return {number}
 */
var mostFrequentEven = function (nums) {
    let map = new Map()
    for (let n of nums) {
        if (n % 2 === 0) {
            if (map.has(n)) {
                map.set(n, map.get(n) + 1)
            } else {
                map.set(n, 1)
            }
        }
    }
    if (map.size === 0) return -1
    let freq = 0
    let small = 0

    for (let [key, val] of map) {
        if (val > freq) {
            freq = val
            small = key
        } else if (val === freq) {
            small = Math.min(small, key)
        }
    }
    return small
}
