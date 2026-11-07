
// Time (N * N)
// Space (N * N)


/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    const result = [];

    for(let i=0; i < numRows; i++){
        const row = [];

        for(let j=0; j<=i; j++){

            if(j === 0 || j === i){
                row.push(1)
            }
            else{
                row.push(result[result.length-1][j] + result[result.length-1][j-1])
            }
        }

        result.push(row);
    }
    return result; 
};