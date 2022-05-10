/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
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
 * @return {boolean}
 */
// 中序遍历，判断值是否递增
// var isValidBST = function (root) {
//   if (!root) return true
//   let ans = true
//   let preValue = -Infinity
//   function inorder(root) {
//     if (!root || !ans) return
//     inorder(root.left)
//     if (root.val <= preValue) {
//       ans = false
//     }
//     preValue = root.val
//     inorder(root.right)
//   }
//   inorder(root)
//   return ans
// }

// 递归
var isValidBST = function (root) {
  let ans = true
  if (!root) return ans
  function dfs(root, min, max) {
    if (!root || !ans) return
    if (root.val <= min || root.val >= max) {
      ans = false
    }
    dfs(root.left, min, root.val)
    dfs(root.right, root.val, max)
  }
  dfs(root, -Infinity, Infinity)
  return ans
}

// @lc code=end
