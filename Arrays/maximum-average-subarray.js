/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

//  Time Complexity O(N)
// Space Complexity O(1)


var findMaxAverage = function(nums, k) {

    let maxAverage = -Infinity;
    let sum = 0;
    
    let j = 0;
    for(let i = 0; i < nums.length; i++){

        while((i - j) + 1 > k){
            sum -= nums[j++];
        }

        sum += nums[i];

        if((i - j) + 1 === k) 
            maxAverage = Math.max(sum / k, maxAverage);

    }

    return maxAverage;
    
};