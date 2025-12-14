/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
    while (num > 9) {
        let sum = num.toString().split("")
        sum = sum.reduce((acc, val) => acc += Number(val), 0)
        num = sum
    }
    return num
};