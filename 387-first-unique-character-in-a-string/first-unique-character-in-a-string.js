/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
    let map = new Map()
    for (let ch of s) {
        map.set(ch, (map.get(ch) || 0) + 1)
    }

    for (let [key, val] of map) {
        if (val === 1) {
            return s.indexOf(key)
        }
    }
    return -1
};