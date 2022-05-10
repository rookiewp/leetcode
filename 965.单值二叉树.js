/*
 * @lc app=leetcode.cn id=965 lang=javascript
 *
 * [965] 单值二叉树
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
 * @return {boolean}
 */
var isUnivalTree = function (root) {
  if (!root) return true
  const l = isUnivalTree(root.left)
  const r = isUnivalTree(root.right)
  if (root.left && root.right) {
    return root.val === root.left.val && root.val === root.right.val && l && r
  } else if (!root.left && !root.right) {
    return true
  } else {
    return root.val === (root.left || root.right).val && l && r
  }
}
// @lc code=end
