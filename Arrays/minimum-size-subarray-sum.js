
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */


// Time Complexity O(N)
// Space Complexity O(1)

var minSubArrayLen = function(target, nums) {

    let j = 0;
    let sum = 0;
    let length = Infinity;

    for(let i = 0; i < nums.length; i++){
        sum += nums[i];

        while(j <= i && sum >= target){
            length = Math.min(length, (i - j)+1);

            sum -= nums[j++];
        }
    
    }


    return length === Infinity ? 0 : length;


};