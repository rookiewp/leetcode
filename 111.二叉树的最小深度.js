/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
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
// 该解法是仿照104.二叉树的最大深度，使用的是DFS
// var minDepth = function (root) {
//   if (!root) return 0
//   const leftMinDepth = minDepth(root.left)
//   const rightMinDepth = minDepth(root.right)
//   if (!leftMinDepth && !rightMinDepth) return 1
//   if (!leftMinDepth || !rightMinDepth) return (leftMinDepth || rightMinDepth) + 1
//   return Math.min(leftMinDepth, rightMinDepth) + 1
// }

// 用BFS更合适，也就是二叉树的层次遍历
var minDepth = function (root) {
  if (!root) return 0
  let res = 1
  const queue = [root]
  while (queue.length) {
    let len = queue.length
    while (len > 0) {
      const cur = queue.shift()
      if (!cur.left && !cur.right) {
        return res
      }
      if (cur.left) {
        queue.push(cur.left)
      }
      if (cur.right) {
        queue.push(cur.right)
      }
      len--
    }
    res++
  }
}

// @lc code=end
