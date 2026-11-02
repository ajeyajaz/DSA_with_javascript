/**
 * @param {number[]} nums
 * @return {number}
 */


// Time : O(N)
// Space : O(1)

var maxProduct = function(nums) {


    let maxLeft = -Infinity;
    let product = 1;

    for(let num of nums){

        product *= num;
        maxLeft = Math.max(product, maxLeft);

        if(product === 0){
            product = 1
        }
    }


    let maxRight = -Infinity;
    product = 1;


    for(let i = nums.length-1; i>=0; i--){

        product *= nums[i];
        maxRight = Math.max(product, maxRight);

        if(product === 0) product = 1
    }


    let maxMiddle = -Infinity;
    product = 1;
    for(let num of nums){

        product *= num;
        maxMiddle = Math.max(product, maxMiddle);

        if(product <= 0){
            product = 1
        }
    }

    return Math.max(maxMiddle, maxLeft, maxRight);
};