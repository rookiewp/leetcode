/*
 * @lc app=leetcode.cn id=257 lang=javascript
 *
 * [257] 二叉树的所有路径
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
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  const res = []
  var preorder = function (node, path) {
    if (!node) return
    path += path.length === 0 ? node.val : `->${node.val}`
    if (!node.left && !node.right) res.push(path)
    preorder(node.left, path)
    preorder(node.right, path)
  }
  preorder(root, '')
  return res
}
// @lc code=end
