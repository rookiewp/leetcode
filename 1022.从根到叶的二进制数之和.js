/*
 * @lc app=leetcode.cn id=1022 lang=javascript
 *
 * [1022] 从根到叶的二进制数之和
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
var sumRootToLeaf = function (root) {
  let sum = 0
  if (!root) return sum
  /**
   * @description: 前序遍历
   * @param {TreeNode} root
   * @param {string} str 从根节点到当前节点的值组成的二进制数
   * @return {void}
   */
  function preOrder(root, str) {
    if (!root) return
    str = `${str}${root.val}`
    if (!root.left && !root.right) {
      sum += parseInt(str, 2)
    }
    preOrder(root.left, str)
    preOrder(root.right, str)
  }
  preOrder(root, '')
  return sum
}

// @lc code=end
