/*
 * @lc app=leetcode.cn id=106 lang=javascript
 *
 * [106] 从中序与后序遍历序列构造二叉树
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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
  // 中序遍历数组“值” => “index”的对应关系
  const map = new Map()
  for (let i = 0; i < inorder.length; i++) {
    map.set(inorder[i], i)
  }
  /**
   * @description: 递归构建tree
   * @param {number} inLeft 中序遍历数组的左边界index
   * @param {number} inRight 中序遍历数组的右边界index
   * @param {number} postLeft 后序遍历数组的左边界index
   * @param {number} postRight 后序遍历数组的右边界index
   * @return {TreeNode}
   */
  function build(inLeft, inRight, postLeft, postRight) {
    if (inLeft > inRight || postLeft > postRight) return null
    const rootVal = postorder[postRight]
    const root = new TreeNode(rootVal)
    const pIndex = map.get(rootVal)
    root.right = build(pIndex + 1, inRight, postRight - inRight + pIndex, postRight - 1)
    root.left = build(inLeft, pIndex - 1, postLeft, postRight - inRight + pIndex - 1)
    return root
  }
  return build(0, inorder.length - 1, 0, postorder.length - 1)
}
// @lc code=end
