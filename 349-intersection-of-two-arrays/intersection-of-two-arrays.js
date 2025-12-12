/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
    let arr = []
    let obj = {}
    for (let i = 0; i < nums1.length; i++) {
        obj[nums1[i]] = (obj[nums1[i]] || 0) + 1
    }

    for (let i = 0; i < nums2.length; i++) {
        if (obj[nums2[i]] >= 1 && !arr.includes(nums2[i])) {
            arr.push(nums2[i])
            obj[nums2[i]] = obj[nums2[i]] - 1
        }
    }

    return arr
};