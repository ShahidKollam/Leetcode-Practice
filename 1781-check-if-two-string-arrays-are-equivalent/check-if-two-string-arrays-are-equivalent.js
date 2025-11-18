/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function (word1, word2) {
    let i = 0, j = 0
    let x = 0, y = 0

    while (i < word1.length && j < word2.length) {
        if (word1[i][x] !== word2[j][y]) return false

        x++
        if (x === word1[i].length) {
            x = 0
            i++
        }
        y++
        if (y === word2[j].length) {
            y = 0
            j++
        }
    }
    return i === word1.length && j === word2.length
};