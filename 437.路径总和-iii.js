/*
 * @lc app=leetcode.cn id=437 lang=javascript
 *
 * [437] 路径总和 III
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
 * @param {number} targetSum
 * @return {number}
 */
// 暴力递归
// var pathSum = function (root, targetSum) {
//   let ans = 0
//   function getSum(root, sum) {
//     if (!root) return
//     sum = sum + root.val
//     if (sum === targetSum) ans++
//     getSum(root.left, sum)
//     getSum(root.right, sum)
//   }
//   function traverse(root) {
//     if (!root) return
//     getSum(root, 0)
//     traverse(root.left, 0)
//     traverse(root.right, 0)
//   }
//   traverse(root)
//   return ans
// }

// 前缀合
var pathSum = function (root, targetSum) {
  let ans = 0
  if (!root) return ans
  const map = new Map([[0, 1]])
  function inorder(root, sum) {
    if (!root) return
    sum = sum + root.val
    ans += map.get(sum - targetSum) || 0
    map.set(sum, (map.get(sum) || 0) + 1)
    inorder(root.left, sum)
    inorder(root.right, sum)
    map.set(sum, (map.get(sum) || 0) - 1)
  }
  inorder(root, 0)
  return ans
}
// @lc code=end
