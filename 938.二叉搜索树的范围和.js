/*
 * @Author: wangpei
 * @Date: 2021-08-01 15:04:06
 * @LastEditTime: 2021-08-01 15:26:48
 * @LastEditors: wangpei
 * @Description: file content
 * @FilePath: /leetcode/938.二叉搜索树的范围和.js
 */
/*
 * @lc app=leetcode.cn id=938 lang=javascript
 *
 * [938] 二叉搜索树的范围和
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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function (root, low, high) {
  let ans = 0
  if (!root) return ans
  function inOrder(root) {
    if (!root) return
    inOrder(root.left)
    if (root.val >= low && root.val <= high) {
      ans += root.val
    }
    inOrder(root.right)
  }
  inOrder(root)
  return ans
}
// @lc code=end
