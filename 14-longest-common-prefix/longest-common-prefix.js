/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    if (!strs.length) return "";

    strs = strs.sort()
    let prefix = ''
    
    for (let i = 0; i < strs[0].length; i++) {
        // if (!strs[i].length) return "";


        if (strs[0][i] === strs[strs.length - 1][i]) prefix += strs[0][i]
        else break
    }
    return prefix
};