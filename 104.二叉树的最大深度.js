/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
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
// 后序遍历
// var maxDepth = function (root) {
//   if (!root) return 0
//   const leftDepth = maxDepth(root.left)
//   const rightDepth = maxDepth(root.right)
//   return Math.max(leftDepth, rightDepth) + 1
// }

// 前序遍历
var maxDepth = function (root) {
  let res = 0
  const traverse = function (root, preFloor) {
    if (!root) return
    const curFloor = preFloor + 1
    res = Math.max(res, curFloor)
    traverse(root.left, curFloor)
    traverse(root.right, curFloor)
  }
  traverse(root, 0)
  return res
}
// @lc code=end
