/*
 * @lc app=leetcode.cn id=117 lang=javascript
 *
 * [117] 填充每个节点的下一个右侧节点指针 II
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

// 进阶
var connect = function (root) {
  if (root === null) return null
  let newHead = null
  let last = null
  function handle(node) {
    if (newHead === null) {
      newHead = node
    }
    if (last) {
      last.next = node
    }
    last = node
  }
  let head = root
  while (head) {
    let pointer = head
    while (pointer) {
      if (pointer.left !== null) {
        handle(pointer.left)
      }
      if (pointer.right !== null) {
        handle(pointer.right)
      }
      pointer = pointer.next
    }
    head = newHead
    newHead = null
    last = null
  }
  return root
}

// @lc code=end
