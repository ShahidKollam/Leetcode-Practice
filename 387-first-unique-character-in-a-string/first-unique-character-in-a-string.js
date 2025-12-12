/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
    let map = new Map()

    for (let i of s) {
        map.set(i, (map.get(i) || 0) + 1)
    }

    for (let i = 0; i < s.length; i++) {
        if (map.get(s[i]) === 1) return i
    }
    return -1
};