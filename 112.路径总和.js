/*
 * @lc app=leetcode.cn id=112 lang=javascript
 *
 * [112] 路径总和
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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  let res = false
  var preorder = function (node, sum) {
    if (!node || res) return
    sum += node.val
    if (!node.left && !node.right && targetSum === sum) {
      res = true
    }
    preorder(node.left, sum)
    preorder(node.right, sum)
  }
  preorder(root, 0)
  return res
}
// @lc code=end
