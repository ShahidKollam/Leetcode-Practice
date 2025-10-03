/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    let str = s.split("").filter((s) => /[a-zA-Z0-9]/.test(s))
    str = str.join("").toLowerCase()
    
    let left = 0
    let right = str.length - 1

    while (left < right) {
        if (str[left] === str[right]) {
            left++
            right--
        } else {
            return false
        }
    }
    return true
};