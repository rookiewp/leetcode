/*
 * @lc app=leetcode.cn id=814 lang=javascript
 *
 * [814] 二叉树剪枝
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
 * @return {TreeNode}
 */
var pruneTree = function (root) {
  const sentinelNode = new TreeNode(-1)
  sentinelNode.left = root
  function traverse(root) {
    if (!root) return true
    const leftNeedPrune = traverse(root.left)
    const rightNeedPrune = traverse(root.right)
    if (leftNeedPrune) root.left = null
    if (rightNeedPrune) root.right = null
    if (leftNeedPrune && rightNeedPrune && root.val === 0) {
      return true
    }
    return false
  }
  traverse(sentinelNode)
  return sentinelNode.left
}
// @lc code=end
