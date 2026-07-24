/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// Time complexity O(N)
// Space complexity O(N)


var subarraySum = function(nums, k) {
    let sum = 0;
    let count = 0;
    const sumMap = new Map([[0, 1]]);

    for(let num of nums){
        sum += num;
        
        count += sumMap.get(sum-k) || 0;
        sumMap.set(sum, (sumMap.get(sum) || 0) + 1)
    }
    
    return count;
};