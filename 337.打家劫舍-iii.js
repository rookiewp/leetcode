/*
 * @lc app=leetcode.cn id=337 lang=javascript
 *
 * [337] 打家劫舍 III
 */

// @lc code=start
/**
 * Definition for a binary tree root.
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
// var rob = function (root) {
//   const memo = new Map()
//   function postorder(root) {
//     if (!root) return 0
//     if (memo.get(root)) return memo.get(root)
//     const left = postorder(root.left)
//     const right = postorder(root.right)
//     let leftChildren = 0
//     if (root.left) {
//       leftChildren = postorder(root.left.left) + postorder(root.left.right)
//     }
//     let rightChildren = 0
//     if (root.right) {
//       rightChildren = postorder(root.right.left) + postorder(root.right.right)
//     }
//     const max = Math.max(root.val + leftChildren + rightChildren, left + right)
//     memo.set(root, max)
//     return max
//   }
//   return postorder(root)
// }

function rob(root) {
  function postorder(root) {
    let result = [0, 0]
    if (!root) return result
    const left = postorder(root.left)
    const right = postorder(root.right)
    result[0] = root.val + left[1] + right[1]
    result[1] = Math.max(left[0], left[1]) + Math.max(right[0], right[1])
    return result
  }
  const result = postorder(root)
  return Math.max(result[0], result[1])
}


// @lc code=end
