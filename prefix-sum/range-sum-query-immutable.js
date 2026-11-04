// Time complexity O(1)
// space Complexity O(N)

/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.prefix = [];

    for(let num of nums){
        this.prefix.push(num + (this.prefix[this.prefix.length-1] || 0))
    }
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
    return this.prefix[right] - (this.prefix[left-1] || 0);
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */