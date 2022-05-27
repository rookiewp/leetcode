/*
 * @lc app=leetcode.cn id=235 lang=javascript
 *
 * [235] 二叉搜索树的最近公共祖先
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  let res
  var postorder = function (node) {
    if (!node || res) return 0
    const leftNum = postorder(node.left)
    const rightNum = postorder(node.right)
    const num = leftNum + rightNum + (node.val === p.val || node.val === q.val ? 1 : 0)
    if (num === 2 && !res) res = node
    return num
  }
  postorder(root)
  return res
}
// @lc code=end
