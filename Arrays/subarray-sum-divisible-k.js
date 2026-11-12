
// Time: O(N)
// Space: O(1)

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysDivByK = function (nums, k) {

    const map = new Map([[0, 1]]);
    let prefix = 0;
    let count = 0;

    for (let num of nums) {
        prefix += num;

        const remainder = ((prefix % k) + k) % k;

        count += map.get(remainder) || 0;
        map.set(remainder, (map.get(remainder) || 0) + 1);

    }

    return count;

};