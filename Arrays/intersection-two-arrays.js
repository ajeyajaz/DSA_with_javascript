//  Time : O(min(nums1, nums2))
// Space : O(min(nums1, nums2))

class Solution {
    intersectionArray(nums1, nums2) {


        let i = 0;
        let j = 0;
        const result = [];

        while(i < nums1.length && j < nums2.length){

            if(nums1[i] === nums2[j]){
                result.push(nums1[i]);
                i++;
                j++
            }
            else if(nums1[i] < nums2[j]){
                i++
            }
            else{
                j++
            }
        }

        return result;
    }
}