/**
 * @param {number[]} nums
 * @return {number}
 */

// Time complexity O(N)
// Space complexity O(1)


var findMaxConsecutiveOnes = function (nums) {

    let count = 0;
    let maxCount = 0;

    for (let num of nums) {

        if (num === 1) count++;
        else {
            count = 0
        }

        maxCount = Math.max(count, maxCount);

    }
    return maxCount;
};