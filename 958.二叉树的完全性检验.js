/*
 * @lc app=leetcode.cn id=958 lang=javascript
 *
 * [958] 二叉树的完全性检验
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
var isCompleteTree = function (root) {
  if (!root) return true
  function TreeNodeWrap(node, order) {
    this.node = node
    this.order = order
  }
  let num = 1
  let last = new TreeNodeWrap(root, 1)
  const queue = [last]
  while (queue.length > 0) {
    const cur = queue.shift()
    last = cur
    const left = cur.node.left
    const right = cur.node.right
    if (left) {
      queue.push(new TreeNodeWrap(left, cur.order * 2))
      num++
    }
    if (right) {
      queue.push(new TreeNodeWrap(right, cur.order * 2 + 1))
      num++
    }
  }
  return num === last.order
}
// @lc code=end
