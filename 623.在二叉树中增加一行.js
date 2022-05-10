/*
 * @lc app=leetcode.cn id=623 lang=javascript
 *
 * [623] 在二叉树中增加一行
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
 * @param {number} val
 * @param {number} depth
 * @return {TreeNode}
 */
var addOneRow = function (root, val, depth) {
  // 哨兵节点
  const sentinelNode = new TreeNode()
  sentinelNode.left = root
  function traverse(root, deep) {
    if (!root) return
    if (deep === depth - 1) {
      const left = root.left
      const right = root.right
      const insertLeft = new TreeNode(val)
      const insertRight = new TreeNode(val)
      root.left = insertLeft
      insertLeft.left = left
      root.right = insertRight
      insertRight.right = right
      return
    }
    traverse(root.left, deep + 1)
    traverse(root.right, deep + 1)
  }
  traverse(sentinelNode, 0)
  return sentinelNode.left
}
// @lc code=end
