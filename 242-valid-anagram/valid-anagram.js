/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if (s.length !== t.length) return false
    let map = new Map()

    for (let i = 0; i < t.length; i++) {
        map.set(t[i], (map.get(t[i]) || 0) + 1)
    }
    for (let ch of s) {
        if (!map.has(ch)) {
            return false
        }
        map.set(ch, map.get(ch) - 1)

        if (map.get(ch) < 0) return false

    }
    return true
};