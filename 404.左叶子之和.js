/*
 * @lc app=leetcode.cn id=404 lang=javascript
 *
 * [404] 左叶子之和
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
var sumOfLeftLeaves = function (root) {
  let res = 0
  var preorder = function (node, isLeft) {
    if (!node) return
    if (isLeft && !node.left && !node.right) res += node.val
    preorder(node.left, true)
    preorder(node.right, false)
  }
  preorder(root, false)
  return res
}
// @lc code=end
