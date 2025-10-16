/**
 * @param {number} n
 * @return {number}
 */
var smallestEvenMultiple = function (n) {
    if (n * n % 2 === 0) return n
    else return n * 2

};