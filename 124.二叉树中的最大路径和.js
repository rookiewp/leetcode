/*
 * @lc app=leetcode.cn id=124 lang=javascript
 *
 * [124] 二叉树中的最大路径和
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
var maxPathSum = function (root) {
  let res = -Infinity
  function traverse(root) {
    if (!root) return 0
    const leftMaxPahtSum = traverse(root.left)
    const rightMaxPahtSum = traverse(root.right)
    const val = root.val
    res = Math.max(leftMaxPahtSum + val, rightMaxPahtSum + val, leftMaxPahtSum + rightMaxPahtSum + val, val, res)
    return Math.max(leftMaxPahtSum + val, rightMaxPahtSum + val, val)
  }
  traverse(root)
  return res
}
// @lc code=end
