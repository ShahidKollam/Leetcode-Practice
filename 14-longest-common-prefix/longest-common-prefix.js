/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    strs = strs.sort()
    let str = ''
    let first = strs[0]
    let last = strs[strs.length - 1]

    for (let i = 0; i < last.length; i++) {
        if (first[i] === last[i]) {
            str += first[i]
        } else {
            break
        }
    }
    return str
};