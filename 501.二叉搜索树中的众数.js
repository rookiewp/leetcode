/*
 * @lc app=leetcode.cn id=501 lang=javascript
 *
 * [501] 二叉搜索树中的众数
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
 * @return {number[]}
 */
var findMode = function (root) {
  let res = []
  let maxNum = 0
  let curNum = 0
  let curVal = null
  var inorder = function (node) {
    if (!node) return
    inorder(node.left)
    curNum = (node.val === curVal ? curNum : 0) + 1
    curVal = node.val
    if (curNum > maxNum) {
      maxNum = curNum
      res = [node.val]
    } else if (curNum === maxNum) {
      res.push(node.val)
    }
    inorder(node.right)
  }
  inorder(root)
  return res
}
// @lc code=end
