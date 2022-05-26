/*
 * @lc app=leetcode.cn id=108 lang=javascript
 *
 * [108] 将有序数组转换为二叉搜索树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  var recurse = function (start, end) {
    if (start > end) return null
    const mid = start + ((end - start) >> 1)
    const node = new TreeNode(nums[mid])
    node.left = recurse(start, mid - 1)
    node.right = recurse(mid + 1, end)
    return node
  }
  return recurse(0, nums.length - 1)
}
// @lc code=end
