/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    // strs = strs.sort()
    // let str = ''
    // let first = strs[0]
    // let last = strs[strs.length - 1]

    // for (let i = 0; i < last.length; i++) {
    //     if (first[i] === last[i]) {
    //         str += first[i]
    //     } else {
    //         break
    //     }
    // }
    // return str
    if (!strs.length) return ""

    for (let i = 0; i < strs[0].length; i++) {
        let char = strs[0][i]
        for (let j = 0; j < strs.length; j++) {
            if (char !== strs[j][i]) {
                return strs[0].slice(0, i)
            }
        }
    }
    return strs[0]
};