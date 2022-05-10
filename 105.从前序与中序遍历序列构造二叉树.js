/*
 * @lc app=leetcode.cn id=105 lang=javascript
 *
 * [105] 从前序与中序遍历序列构造二叉树
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  // 中序遍历数组“值” => “index”的对应关系
  const map = new Map()
  for (let i = 0; i < inorder.length; i++) {
    map.set(inorder[i], i)
  }
  /**
   * @description: 递归构建tree
   * @param {number} preLeft 前序遍历数组的左边界index
   * @param {number} preRight 前序遍历数组的右边界index
   * @param {number} inLeft 中序遍历数组的左边界index
   * @param {number} inRight 中序遍历数组的右边界index
   * @return {TreeNode}
   */
  function build(preLeft, preRight, inLeft, inRight) {
    if (preLeft > preRight || inLeft > inRight) return null
    const rootVal = preorder[preLeft]
    const root = new TreeNode(rootVal)
    const pIndex = map.get(rootVal)
    root.left = build(preLeft + 1, pIndex - inLeft + preLeft, inLeft, pIndex - 1)
    root.right = build(pIndex - inLeft + preLeft + 1, preRight, pIndex + 1, inRight)
    return root
  }
  return build(0, preorder.length - 1, 0, inorder.length - 1)
}
// @lc code=end
