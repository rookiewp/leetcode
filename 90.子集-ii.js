/*
 * @lc app=leetcode.cn id=90 lang=javascript
 *
 * [90] 子集 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  const res = []
  const path = []
  const visited = new Map()
  nums = nums.sort((a, b) => a - b)
  function getKey(path) {
    return path.join(',')
  }
  var backtrack = function (nums, start) {
    const key = getKey(path)
    if (!visited.has(key)) {
      res.push(path.slice(0))
      visited.set(key, true)
    }
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
