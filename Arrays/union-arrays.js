
// Time Complexity: O(N)
// Space Complexity: O(1)

class Solution {
    unionArray(nums1, nums2) {

    const result = [];
    let i = 0;
    let j = 0;

    while(i < nums1.length && j < nums2.length){
        let num;
    
        if(nums1[i] < nums2[j]) num = nums1[i++];
        else num = nums2[j++];

        if(result.length === 0 || result[result.length-1] !== num){
            result.push(num);
        }
    }


    while(i < nums1.length){
        let num = nums1[i++];

        if(result.length === 0 || result[result.length-1] !== num){
            result.push(num);
        }

        i++
    }

    while(j < nums2.length){
        let num = nums2[j++];

        if(result.length === 0 || result[result.length-1] !== num){
            result.push(num);
        }

        j++

    }

    return result;
    }
}