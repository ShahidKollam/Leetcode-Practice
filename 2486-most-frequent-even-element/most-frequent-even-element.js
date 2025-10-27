/**
 * @param {number[]} nums
 * @return {number}
 */
var mostFrequentEven = function(nums) {
    let map = new Map();
    let freq = 0;
    let small = Infinity;

    for (let n of nums) {
        if (n % 2 === 0) {
            let count = (map.get(n) || 0) + 1;
            map.set(n, count);

            if (count > freq || (count === freq && n < small)) {
                freq = count;
                small = n;
            }
        }
    }

    return freq === 0 ? -1 : small;
};
