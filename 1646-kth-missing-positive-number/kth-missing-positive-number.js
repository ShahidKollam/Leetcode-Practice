/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function (arr, k) {
    let missarr = [];
    let expected = 1;  // start from 1

    for (let num of arr) {
        while (num > expected) {
            missarr.push(expected);
            expected++;
        }
        expected++;
    }

    // If k-th missing is beyond the array range
    if (missarr.length < k) {
        return expected + (k - missarr.length - 1);
    }

    return missarr[k - 1];
};
