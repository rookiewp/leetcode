/*
 * @lc app=leetcode.cn id=662 lang=javascript
 *
 * [662] 二叉树最大宽度
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
var widthOfBinaryTree = function (root) {
  let ans = 0
  if (!root) return ans
  root.pos = 0
  let mostLeft = -1
  let mostRight = -1
  const queue = [root]
  while (queue.length > 0) {
    mostLeft = queue[0].pos
    let len = queue.length
    for (let i = 0; i < len; i++) {
      const cur = queue.shift()
      const pos = cur.pos
      mostRight = pos
      const left = cur.left
      if (left) {
        left.pos = (pos - mostLeft) * 2
        queue.push(left)
      }
      const right = cur.right
      if (right) {
        right.pos = (pos - mostLeft) * 2 + 1
        queue.push(right)
      }
      delete cur.pos
    }
    ans = Math.max(ans, mostRight - mostLeft + 1)
    mostLeft = -1
    mostRight = -1
  }
  return ans
}
// @lc code=end
