/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
    let map = new Map()
    for (let n of s) {
        if (map.has(n)) {
            map.set(n, (map.get(n)) + 1)
        } else {
            map.set(n, 1)
        }

    }
    for (let n of s) {
        if (map.get(n) === 1) return s.indexOf(n)

    }
    return -1
};
