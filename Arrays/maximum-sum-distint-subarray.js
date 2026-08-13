/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// Time Complexity O(N)
// Space Complexity O(1)


var maximumSubarraySum = function (nums, k) {


    let sum = 0;
    let maxSum = 0;
    let uniqueNums = new Set();
    let j = 0;

    for (let i = 0; i < nums.length; i++) {

        while (j < i && (uniqueNums.has(nums[i]) || (i - j) + 1 > k)) {

            uniqueNums.delete(nums[j]);
            sum -= nums[j];

            j++;
        }

        sum += nums[i];
        uniqueNums.add(nums[i]);

        if ((i - j) + 1 === k) maxSum = Math.max(maxSum, sum);
    }

    return maxSum;
};