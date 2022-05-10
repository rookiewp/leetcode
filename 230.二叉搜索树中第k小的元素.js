/*
 * @lc app=leetcode.cn id=230 lang=javascript
 *
 * [230] 二叉搜索树中第K小的元素
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
 * @return {number}
 */
// 中序遍历
var kthSmallest = function (root, k) {
  let i = 0
  let ans = null
  function inorder(root) {
    if (!root) return
    inorder(root.left)
    if (i === k) return
    i++
    if (i === k) {
      ans = root.val
      return
    }
    inorder(root.right)
  }
  inorder(root)
  return ans
}

// 大顶堆
// var kthSmallest = function (root, k) {
//   const heap = [null]
//   let count = 0
//   function buildHeap(root, k) {
//     if (!root) return
//     buildHeap(root.left, k)
//     if (count === k) return
//     count += 1
//     heap[count] = root.val
//     let i = count
//     while (Math.floor(i / 2) > 0 && heap[i] > heap[Math.floor(i / 2)]) {
//       swap(Math.floor(i / 2), i)
//       i = Math.floor(i / 2)
//     }
//     if (count === k) return
//     buildHeap(root.right, k)
//   }

//   function swap(m, n) {
//     const temp = heap[m]
//     heap[m] = heap[n]
//     heap[n] = temp
//   }
//   buildHeap(root, k)
//   return heap[1]
// }
// @lc code=end
