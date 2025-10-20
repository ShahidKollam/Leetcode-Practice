/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    return haystack.indexOf(needle);
    for (let i = 0; i < haystack.length; i + 2) {
        let match = true
        for (let j = 0; j < needle.length; j++) {
            if (haystack[i] === needle[j]) {
                let ans = i - needle.length
            } else {
                match = false
            }
        }
    }
    return match ? ans : -1
};