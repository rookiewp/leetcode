/*
 * @lc app=leetcode.cn id=113 lang=javascript
 *
 * [113] 路径总和 II
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
 * @return {number[][]}
 */
// var pathSum = function (root, targetSum) {
//   const ans = []
//   /**
//    * @description: 前序遍历
//    * @param {TreeNode} root 当前遍历到的节点
//    * @param {string} numStr 根节点到当前节点的父节点所包含的的所有节点的值组成的字符串
//    * @param {number} sum 根节点到当前节点的父节点所包含的的所有节点值的和
//    * @return {void}
//    */
//   function dfs(root, numStr, sum) {
//     if (!root) return
//     sum += root.val
//     if (numStr === '') {
//       numStr = `${root.val}`
//     } else {
//       numStr = `${numStr},${root.val}`
//     }
//     if (!root.left && !root.right && sum === targetSum) {
//       ans.push(numStr)
//     }
//     dfs(root.left, numStr, sum)
//     dfs(root.right, numStr, sum)
//   }
//   dfs(root, '', 0)
//   const res = []
//   for (let i = 0; i < ans.length; i++) {
//     const arr = ans[i].split(',')
//     arr.forEach((s) => (s = Number(s)))
//     res.push(arr)
//   }
//   return res
// }

var pathSum = function (root, targetSum) {
  const ans = []
  const stack = []
  function dfs(root, targetSum) {
    if (!root) return
    stack.push(root.val)
    targetSum -= root.val
    if (!root.left && !root.right && targetSum === 0) {
      ans.push([...stack])
    }
    dfs(root.left, targetSum)
    dfs(root.right, targetSum)
    stack.pop()
  }
  dfs(root, targetSum)
  return ans
}
// @lc code=end
