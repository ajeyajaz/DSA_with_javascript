/**
 * @param {string} s
 * @return {number}
 */

// Time complexity O(N)
// Space complexity O(N)

var minAddToMakeValid = function(s) {

    const stack = [];

    for(let parenthesis  of s){

        if(stack.length && (parenthesis == ')' && stack[stack.length-1] === '(')){
            stack.pop();
        }
        else{
            stack.push(parenthesis);
        }
    }

    return stack.length;
    
};