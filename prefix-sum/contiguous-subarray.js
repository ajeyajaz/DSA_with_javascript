//  Time: O(N)
// Space: O(N)


/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {

    let prefixMap = new Map();
    let sum = 0;
    let maxLen = 0;

    for(let i=0; i<nums.length; i++){
        let num = nums[i];

        sum += num === 0 ? -1 : num;

        if(sum === 0) maxLen = i + 1;

        if(prefixMap.has(sum)){
            maxLen = Math.max(maxLen, i - prefixMap.get(sum));
        }
        else{
            prefixMap.set(sum, i)
        }
    }

    return maxLen;
    
};