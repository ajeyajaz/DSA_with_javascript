/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */

// Time Complexity O(N)
// space Complexity O(1)

var maxScore = function(cardPoints, k) {
    
    let maxScore = 0;
    for(let i = 0; i < k; i++) maxScore += cardPoints[i];


    let score = maxScore
    for(let i = 0; i < k; i++){

        score -= cardPoints[(k - 1) - i];
        score += cardPoints[(cardPoints.length-1)-i];


        maxScore = Math.max(score, maxScore);
    }
    return maxScore;
};