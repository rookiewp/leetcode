/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  const ans = [];
  const track = [];
  const used = Array(nums.length).fill(false)
  function backtrack() {
    if (track.length === nums.length) {
      ans.push([...track])
      return
    }
    for (let i = 0; i < nums.length; i++) {
      if (!used[i]) {
        track.push(nums[i])
        used[i] = true
        backtrack()
        used[i] = false
        track.pop()
      }
    }
  }
  backtrack()
  return ans
};
// @lc code=end

