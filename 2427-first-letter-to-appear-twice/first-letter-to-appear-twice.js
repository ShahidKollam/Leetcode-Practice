/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function (s) {
    let set = new Set()
    for (let n of s) {
        if (set.has(n)) {
            return n
        }
        set.add(n)
    }
};