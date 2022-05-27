/*
 * @lc app=leetcode.cn id=530 lang=javascript
 *
 * [530] 二叉搜索树的最小绝对差
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
var getMinimumDifference = function (root) {
  let res = Infinity
  let preVal = null
  let curVal = null
  var inorder = function (root) {
    if (!root) return
    inorder(root.left)
    if (root.val !== curVal) {
      preVal = curVal
      curVal = root.val
    }
    if (curVal !== null && preVal !== null) {
      res = Math.min(res, curVal - preVal)
    }
    inorder(root.right)
  }
  inorder(root)
  return res
}
// @lc code=end
