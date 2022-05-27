/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const res = []
  const path = []
  var backtrack = function (nums, start) {
    res.push(path.slice(0))
    for (let i = start; i < nums.length; i++) {
      path.push(nums[i])
      backtrack(nums, i + 1)
      path.pop()
    }
  }
  backtrack(nums, 0)
  return res
}
// @lc code=end
