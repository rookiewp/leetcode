/*
 * @lc app=leetcode.cn id=889 lang=javascript
 *
 * [889] 根据前序和后序遍历构造二叉树
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
 * @param {number[]} preorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var constructFromPrePost = function (preorder, postorder) {
  function build(preStart, preEnd, postStart, postEnd) {
    if (preStart > preEnd || postStart > postEnd) {
      return null
    }
    const curNode = new TreeNode(preorder[preStart])
    const preLeftStart = preStart + 1
    if (preLeftStart <= preEnd) {
      const postLeftend = postorder.indexOf(preorder[preLeftStart])
      const leftCount = postLeftend - postStart + 1
      curNode.left = build(preLeftStart, preLeftStart + leftCount - 1, postStart, postLeftend)
      curNode.right = build(preLeftStart + leftCount, preEnd, postLeftend + 1, postEnd - 1)
    }
    return curNode
  }
  return build(0, preorder.length - 1, 0, postorder.length - 1)
}
// @lc code=end
