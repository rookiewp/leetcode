/*
 * @lc app=leetcode.cn id=653 lang=javascript
 *
 * [653] 两数之和 IV - 输入 BST
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
 * @param {number} k
 * @return {boolean}
 */
// 使用map，这样没有用上BST
// var findTarget = function (root, k) {
//   let ans = false
//   let findAns = false
//   const map = new Map()
//   function inOrder(root) {
//     if (!root || findAns) return
//     inOrder(root.left)
//     if (map.get(k - root.val)) {
//       findAns = true
//       ans = true
//     } else {
//       map.set(root.val, true)
//     }
//     inOrder(root.right)
//   }
//   inOrder(root)
//   return ans
// }

// BST中序遍历得到一个有序数组，利用双指针得出结果
var findTarget = function (root, k) {
  const arr = []
  function inOrder(root) {
    if (!root) return
    inOrder(root.left)
    arr.push(root.val)
    inOrder(root.right)
  }
  inOrder(root)
  let i = 0
  let j = arr.length - 1
  while (i < j) {
    if (arr[i] + arr[j] === k) return true
    if (arr[j] + arr[i] > k) j--
    if (arr[j] + arr[i] < k) i++
  }
  return false
}
// @lc code=end
