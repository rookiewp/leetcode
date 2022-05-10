/*
 * @lc app=leetcode.cn id=897 lang=javascript
 *
 * [897] 递增顺序搜索树
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
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
// 也可以不生成新的节点，直接改变节点的指针
var increasingBST = function (root) {
  if (!root) return null
  let prev = new TreeNode()
  const head = prev
  function inOrder(root) {
    if (!root) return
    inOrder(root.left)
    const node = new TreeNode(root.val)
    prev.right = node
    prev = node
    inOrder(root.right)
  }
  inOrder(root)
  return head.right
}
// @lc code=end
