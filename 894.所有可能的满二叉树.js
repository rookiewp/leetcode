/*
 * @lc app=leetcode.cn id=894 lang=javascript
 *
 * [894] 所有可能的满二叉树
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
var allPossibleFBT = function (n) {
  const map = new Map()
  function traverse(n) {
    const ans = []
    if (n % 2 === 0) return ans
    if (n === 1) {
      ans.push(new TreeNode(0))
      return ans
    }
    if (map.get(n)) return map.get(n)
    for (let i = 1; i <= n - 2; i += 2) {
      const left = allPossibleFBT(i)
      map.set(i, left)
      const right = allPossibleFBT(n - 1 - i)
      map.set(n - 1 - i, right)
      for (let j = 0; j < left.length; j++) {
        for (let k = 0; k < right.length; k++) {
          const root = new TreeNode(0)
          root.left = left[j]
          root.right = right[k]
          ans.push(root)
        }
      }
    }
    return ans
  }
  return traverse(n)
}
// @lc code=end
