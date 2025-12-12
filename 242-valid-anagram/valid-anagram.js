/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if (t.length !== s.length) return false
    let set = {}
    for (let n of t) {
        set[n] = (set[n] || 0) + 1
    }
    for (let n of s) {
        if (!set[n]) return false
        set[n]--
    }
    return true
};