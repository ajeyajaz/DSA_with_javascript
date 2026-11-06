
// space: O(1)
// Time: (N * M)



/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    
    let column = false;
    let row = false;

    // first row check
    for(let i = 0; i < matrix[0].length; i++){
        if(matrix[0][i] === 0){
            row = true;
            break;
        }
    }

    // first column check
    for(let i = 0; i < matrix.length; i++){
        if(matrix[i][0] === 0){
            column = true;
            break;
        }
    }


    for(let i=1; i<matrix.length; i++){
        for(let j = 1; j < matrix[0].length; j++){

            if(matrix[i][j] === 0){
                matrix[0][j] = 0 // first row
                matrix[i][0] = 0 // first column
            }
        }
    }

    for(let i=1; i<matrix.length; i++){
        for(let j = 1; j < matrix[0].length; j++){

            if(matrix[i][0] === 0 || matrix[0][j] === 0){
                matrix[i][j] = 0;
            }
        }
    }


    if(column){
        for(let i = 0; i < matrix.length; i++){
            matrix[i][0] = 0
        }
    }

    if(row){
        for(let i = 0; i < matrix[0].length; i++){
            matrix[0][i] = 0
        }
    }


};