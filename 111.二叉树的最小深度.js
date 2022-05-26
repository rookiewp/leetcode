/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
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
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function (root) {
  if (!root) return 0
  const leftMinDepth = minDepth(root.left)
  const rightMinDepth = minDepth(root.right)
  if (!leftMinDepth && !rightMinDepth) return 1
  if (!leftMinDepth || !rightMinDepth) return (leftMinDepth || rightMinDepth) + 1
  return Math.min(leftMinDepth, rightMinDepth) + 1
}
// @lc code=end
