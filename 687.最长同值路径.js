/*
 * @lc app=leetcode.cn id=687 lang=javascript
 *
 * [687] 最长同值路径
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
var longestUnivaluePath = function (root) {
  let res = 0
  // getPath返回当前节点左右路径的最大值
  function getPath(root) {
    if (!root) return 0
    let leftPath = getPath(root.left)
    let rightPath = getPath(root.right)
    if (!root.left && !root.right) return 0
    let maxPath = 0
    let curPath = 0
    if (root.left && root.val === root.left.val) {
      curPath = leftPath + 1
      maxPath = leftPath + 1
    }
    if (root.right && root.val === root.right.val) {
      curPath += rightPath + 1
      maxPath = Math.max(maxPath, rightPath + 1)
    }
    res = Math.max(res, curPath)
    return maxPath
  }
  getPath(root)
  return res
}
// @lc code=end
