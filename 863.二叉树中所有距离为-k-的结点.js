/*
 * @lc app=leetcode.cn id=863 lang=javascript
 *
 * [863] 二叉树中所有距离为 K 的结点
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
 * @param {TreeNode} target
 * @param {number} k
 * @return {number[]}
 */
// 通过为每个节点建立父子关系，将二叉树转为了类似于三叉树(left, right, parnet)的图，然后对图进行dfs或dfs
var distanceK = function (root, target, k) {
  const ans = []
  const parentMap = new Map()
  function build(root, p) {
    parentMap.set(root, p)
    if (root.left) build(root.left, root)
    if (root.right) build(root.right, root)
  }
  build(root, null)
  const visited = new Map()
  function traverse(node, deep) {
    if (!node || visited.get(node)) return
    visited.set(node, true)
    if (deep === k) ans.push(node.val)
    // 遍历left
    traverse(node.left, deep + 1)
    // 遍历left
    traverse(node.right, deep + 1)
    // 遍历parent
    if (parentMap.get(node)) traverse(parentMap.get(node), deep + 1)
  }
  traverse(target, 0)
  return ans
}
// @lc code=end
