/*
 * @lc app=leetcode.cn id=116 lang=javascript
 *
 * [116] 填充每个节点的下一个右侧节点指针
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
// var connect = function (root) {
//   if (!root) return null
//   const queue = [root]
//   while (queue.length) {
//     let len = queue.length
//     while (len > 0) {
//       const node = queue.shift()
//       if (node.left) queue.push(node.left)
//       if (node.right) queue.push(node.right)
//       len--
//       node.next = len > 0 ? (node.next = queue[0]) : null
//     }
//   }
//   return root
// }

// 额外空间复杂度为O(1)，递归栈的空间不算额外
var connect = function (root) {
  let mostLeft = root
  while (mostLeft) {
    let pre = mostLeft
    while (pre && pre.left) {
      pre.left.next = pre.right
      const next = pre.next
      if (next) {
        pre.right.next = next.left
      }
      pre = next
    }
    mostLeft = mostLeft.left
  }
  return root
}
// @lc code=end
