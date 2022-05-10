/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  let ans = []
  let leftCount = 0
  let rightCount = 0
  function backtracking(str) {
    if (leftCount === n && rightCount === n) {
      ans.push(str)
      return
    }
    if (leftCount >= rightCount && leftCount < n) {
      leftCount++
      backtracking(str + '(')
      leftCount--
    }
    if (rightCount < leftCount && rightCount < n) {
      rightCount++
      backtracking(str + ')')
      rightCount--
    }
  }
  backtracking('')
  return ans
}
// @lc code=end
