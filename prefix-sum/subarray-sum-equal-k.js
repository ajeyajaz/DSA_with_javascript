// Time: O(N)
// Space: O(N)

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {

    const prefixMap = new Map([[0, 1]]);
    let sum = 0
    let count = 0

    for (let num of nums) {
        sum += num;

        count += prefixMap.get(sum - k) || 0;
        prefixMap.set(sum, (prefixMap.get(sum) || 0) + 1);
    }

    return count;
};