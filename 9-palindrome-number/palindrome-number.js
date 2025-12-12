/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    let xx = x.toString()
    let l = 0
    let r = xx.length - 1
    while (l < r) {

        if (xx[l] !== xx[r]) return false;
        l++
        r--
    }
    return true
};