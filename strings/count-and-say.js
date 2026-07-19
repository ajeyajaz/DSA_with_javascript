/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {

    let prevRes = '1';
    let currRes = []

    for(let i = 2; i <= n; i++){

        let charLen = 0;
        for(let j = 0; j < prevRes.length; j++){
            charLen++;
            
            if(j === prevRes.length-1 || prevRes[j] !== prevRes[j+1]){
                
                currRes.push(charLen + prevRes[j])
                charLen = 0;
            }
        }

        prevRes = currRes.join("");
        currRes = [];
    }
    
    return prevRes
};