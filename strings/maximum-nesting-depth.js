/**
 * @param {string} s
 * @return {number}
 */

// Time complexity O(N)

var maxDepth = function (s) {

    let openParenthese = 0;
    let maxNestDep = 0;

    for (let val of s) {

        if (val === "(") openParenthese++;
        if (val === ")") openParenthese--;

        maxNestDep = Math.max(openParenthese, maxNestDep)
    }
    return maxNestDep;
};