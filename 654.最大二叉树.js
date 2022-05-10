/*
 * @lc app=leetcode.cn id=654 lang=javascript
 *
 * [654] 最大二叉树
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
var constructMaximumBinaryTree = function (nums) {
  function getMaxAndIndex(left, right) {
    let max = -Infinity
    let maxIndex = -1
    for (let i = left; i <= right; i++) {
      if (nums[i] > max) {
        max = nums[i]
        maxIndex = i
      }
    }
    return [max, maxIndex]
  }
  function build(left, right) {
    if (left > right) return null
    const [max, index] = getMaxAndIndex(left, right)
    const root = new TreeNode(max)
    root.left = build(left, index - 1)
    root.right = build(index + 1, right)
    return root
  }
  return build(0, nums.length - 1)
}
// @lc code=end
