// Time O(N)
// Space O(1)

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRightDifference = function(nums) {
    let prefixRight = 0;
    let leftSum = 0;

    for(let num of nums){
        prefixRight += num;
    }

    const result = [];
    for(let i = 0; i < nums.length; i++){

        const rightSum = i+1 >= nums.length ? 0 : prefixRight - (leftSum + nums[i]);

        result.push(Math.abs(leftSum - rightSum));

        leftSum += nums[i];
    }

    return result;
};