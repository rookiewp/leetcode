/*
 * @lc app=leetcode.cn id=110 lang=javascript
 *
 * [110] 平衡二叉树
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
var isBalanced = function (root) {
  let res = true
  var postorder = function (node) {
    if (!node || !res) return 0
    const leftHeight = postorder(node.left)
    const rightHeight = postorder(node.right)
    if (Math.abs(leftHeight - rightHeight) > 1) {
      res = false
    }
    return Math.max(leftHeight, rightHeight) + 1
  }
  postorder(root)
  return res
}
// @lc code=end
