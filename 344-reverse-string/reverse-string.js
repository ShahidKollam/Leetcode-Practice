/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
    let i = s.length - 1
    for (let j = 0; j < s.length / 2; ) {
        [s[j], s[i]] = [s[i], s[j]]
        i--
        j++
    }
};