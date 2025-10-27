/**
 * @param {number[]} nums
 * @return {number}
 */
var mostFrequentEven = function (nums) {
    let freq = 0
    let small = 0

    let map = new Map()
    for (let n of nums) {
        if (n % 2 === 0) {
            if (map.has(n)) {
                map.set(n, map.get(n) + 1)
            } else {
                map.set(n, 1)
            }
        }
        if (freq < map.get(n)) {
            freq = map.get(n)
            small = n
        } else if (freq === map.get(n) && small > n) {
            small = n
        }
    }

    if (map.size === 0) return -1
    return small

    // let freq = 0
    // let small = 0

    // for (let [key, val] of map) {
    //     if (val > freq) {
    //         freq = val
    //         small = key
    //     } else if (val === freq) {
    //         small = Math.min(small, key)
    //     }
    // }
    // return small
}
