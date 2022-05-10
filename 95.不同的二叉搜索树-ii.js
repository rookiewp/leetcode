/*
 * @lc app=leetcode.cn id=95 lang=javascript
 *
 * [95] 不同的二叉搜索树 II
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
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function (n) {
  function build(start, end) {
    const allTrees = []
    if (start > end) {
      allTrees.push(null)
      return allTrees
    }
    for (let i = start; i <= end; i++) {
      const leftAllTrees = build(start, i - 1)
      const rightAllTrees = build(i + 1, end)
      for (let j = 0; j < leftAllTrees.length; j++) {
        for (let k = 0; k < rightAllTrees.length; k++) {
          const root = new TreeNode(i)
          root.left = leftAllTrees[j]
          root.right = rightAllTrees[k]
          allTrees.push(root)
        }
      }
    }
    return allTrees
  }
  return build(1, n)
}
// @lc code=end
