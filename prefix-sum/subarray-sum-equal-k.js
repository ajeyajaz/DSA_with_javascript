//  Time: O(N)
// Space: O(1)


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

var subarraySum = function(nums, k) {
    
    const prefixMap = new Map();
    let count = 0;


    let sum = 0;
    for(let num of nums){
        sum += num;

        if(sum === k) count++;

        count += prefixMap.get(sum - k) || 0;
        prefixMap.set(sum, (prefixMap.get(sum) || 0)+1)
    }

    return count;
};