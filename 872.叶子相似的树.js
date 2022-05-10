/*
 * @lc app=leetcode.cn id=872 lang=javascript
 *
 * [872] 叶子相似的树
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
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function (root1, root2) {
  let ans = true
  const leafNodeList1 = []
  const leafNodeList2 = []
  function dfs(root, list) {
    if (!root) return
    dfs(root.left, list)
    dfs(root.right, list)
    if (!root.left && !root.right) {
      list.push(root.val)
    }
  }
  dfs(root1, leafNodeList1)
  dfs(root2, leafNodeList2)
  let i = 0
  while (i < leafNodeList1.length || i < leafNodeList2.length) {
    if (leafNodeList1[i] !== leafNodeList2[i]) {
      ans = false
      break
    }
    i++
  }
  return ans
}
// @lc code=end
