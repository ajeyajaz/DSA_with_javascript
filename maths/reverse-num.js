
// Time : O(N)
// Space: O(1)

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    

    let absX = Math.abs(x);
    let reverse = 0;

    while(absX > 0){

        const digit = absX % 10;
        reverse = reverse * 10 + digit;

        const result = x > 0 ? reverse : -reverse;
        if(result < Math.pow(-2, 31) || result > Math.pow(2, 31) - 1){
            return 0
        }

        absX  = Math.floor(absX / 10);
    }

    return x > 0 ? reverse : -reverse;
};