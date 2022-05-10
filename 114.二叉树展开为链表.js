/*
 * @lc app=leetcode.cn id=114 lang=javascript
 *
 * [114] 二叉树展开为链表
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
// var flatten = function (root) {
//   let cur = root
//   while (cur) {
//     const left = cur.left
//     let mostRight = left
//     if (mostRight) {
//       while (mostRight.right) {
//         mostRight = mostRight.right
//       }
//       mostRight.right = cur.right
//       cur.right = left
//       cur.left = null
//     }
//     cur = cur.right
//   }
//   return root
// }

var flatten = function (root) {
  if (!root) return
  const list = []
  function traverse(root) {
    if (!root) return
    list.push(root)
    traverse(root.left)
    traverse(root.right)
  }
  traverse(root)
  for (let i = 0; i < list.length; i++) {
    const cur = list[i]
    const next = list[i + 1] || null
    cur.left = null
    cur.right = next
  }
}
// @lc code=end
