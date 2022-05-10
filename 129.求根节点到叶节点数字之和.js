/*
 * @lc app=leetcode.cn id=129 lang=javascript
 *
 * [129] 求根节点到叶节点数字之和
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
var sumNumbers = function (root) {
  let sum = 0
  if (!root) return sum
  function preorder(root, str) {
    if (!root) return
    str += root.val
    if (!root.left && !root.right) {
      sum = sum + parseInt(str)
    }
    preorder(root.left, str)
    preorder(root.right, str)
  }
  preorder(root, '')
  return sum
}
// @lc code=end
