/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */

 // time compexcity O(N)
// space complexity O(N)

var rotateString = function(s, goal) {
    return s.length === goal.length && (s + s).includes(goal)
};


