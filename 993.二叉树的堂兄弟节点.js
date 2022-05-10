/*
 * @lc app=leetcode.cn id=993 lang=javascript
 *
 * [993] 二叉树的堂兄弟节点
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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function (root, x, y) {
  if (!root) return false
  let nodeX = null
  let nodeY = null
  let stack = [root]
  while (stack.length > 0) {
    let len = stack.length
    while (len > 0) {
      const node = stack.shift()
      if (node.val === x) {
        nodeX = node
      } else if (node.val === y) {
        nodeY = node
      } else {
        node.parent = null
      }
      if (node.left) {
        stack.push(node.left)
        node.left.parent = node
      }
      if (node.right) {
        stack.push(node.right)
        node.right.parent = node
      }
      len--
    }
    let parentX = null
    let parentY = null
    if (nodeX) {
      parentX = nodeX.parent
      nodeX.parent = null
    }
    if (nodeY) {
      parentY = nodeY.parent
      nodeY.parent = null
    }
    if (nodeX && nodeY && parentX !== parentY) return true
    nodeX = null
    nodeY = null
  }
  return false
}
// @lc code=end
