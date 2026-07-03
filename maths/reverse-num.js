/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {

    const INT_MAX = 2**31 - 1;
    const INT_MIN = -(2**31);
    
    let absX = x < 0 ? x  * -1 : x;
    let reversed = 0;

    while(absX > 0){
        const digit = absX % 10;

        const result = x > 0 ? reversed : -reversed;
        if(result > INT_MAX || result < INT_MIN) return 0;

        reversed = (reversed * 10 ) + digit;
        absX = Math.trunc(absX / 10);
        
    }
    return x >= 0 ? reversed : -reversed;
};


console.log(reverse(-1123))