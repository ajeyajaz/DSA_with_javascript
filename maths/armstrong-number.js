


// time complexity: O(logn) where n is the input number
//space complexity: O(1)

class Solution {
    isArmstrong(n) {

        let result = 0;
        let num = n;

        while(num > 0){

            const digit = num % 10;
            result += digit ** 3;
            num = Math.trunc(num / 10);
        }

        return result === n;

    }
}