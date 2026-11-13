//  Time: O(Max(nums1, nums2));
// time: O(nums1 + nums2)


class Solution {
    unionArray(nums1, nums2) {

        let i = 0;
        let j = 0;
        let num;
        const result = [];

        while (i < nums1.length && j < nums2.length) {

            if (nums1[i] <= nums2[j]) {
                num = nums1[i];
                i++
            }
            else {
                num = nums2[j];
                j++
            }

            if (result.length === 0 || result[result.length - 1] !== num) {
                result.push(num);
            }
        }

        if (i < nums1.length) {
            if (result.length === 0 || result[result.length - 1] !== nums1[i]) {
                result.push(nums1[i]);
            }

            i++;
        }


        if (j < nums2.length) {
            if (result.length === 0 || result[result.length - 1] !== nums2[j]) {
                result.push(nums2[j]);
            }

            j++;
        }

    }
}