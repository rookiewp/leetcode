/*
 * @lc app=leetcode.cn id=543 lang=javascript
 *
 * [543] 二叉树的直径
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
var diameterOfBinaryTree = function (root) {
  let res = -Infinity
  var postorder = function (node) {
    if (!node) return 0
    const leftLen = postorder(node.left)
    const rightLen = postorder(node.right)
    res = Math.max(res, leftLen + rightLen + 1)
    return Math.max(leftLen, rightLen) + 1
  }
  postorder(root)
  return res - 1
}
// @lc code=end
