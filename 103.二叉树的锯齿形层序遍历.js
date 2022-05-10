/*
 * @lc app=leetcode.cn id=103 lang=javascript
 *
 * [103] 二叉树的锯齿形层序遍历
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
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
  const ans = []
  if (!root) return ans
  let direction = 'left'
  const queue = [root]
  while (queue.length) {
    const res = []
    let len = queue.length
    while (len > 0) {
      const node = queue.shift()
      if (direction === 'left') {
        res.push(node.val)
      } else {
        res.unshift(node.val)
      }
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
      len--
    }
    direction = direction === 'left' ? 'right' : 'left'
    ans.push(res)
  }
  return ans
}
// @lc code=end
