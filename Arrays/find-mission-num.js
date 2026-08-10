// Time complexity : O(N)
// Space complexity : O(1)

class Solution {
    missingNumber(nums) {

        let actualSum = 0;
        let expectedSum = 0;

        for(let num of nums) actualSum += num;
        for(let i = 0; i <= nums.length; i++) expectedSum += i;


        return expectedSum - actualSum;
    }
}