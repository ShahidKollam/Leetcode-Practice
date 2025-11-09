/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    for (let i = 0; i <= haystack.length - needle.length; i++) {
        let sub = haystack.substring(i, i + needle.length)
        if (needle === sub) { return i }

    }
    return -1
};