/*
 * @lc app=leetcode.cn id=450 lang=javascript
 *
 * [450] 删除二叉搜索树中的节点
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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function (root, key) {
  if (!root || key === undefined || key === null) return root
  // 哨兵节点
  const sentinel = new TreeNode()
  sentinel.left = root
  let p = sentinel
  // 是否为叶子节点
  function isLeafNode(root) {
    return root.left === null && root.right === null ? true : false
  }
  /**
   * @description: 删除p节点的子节点root, root最多只有一个子节点
   * @param {TreeNode} root 子节点
   * @param {TreeNode} p 父节点
   * @return {void}
   */
  function delChild(root, p) {
    const isLeaf = isLeafNode(root)
    if (p.left === root) {
      p.left = isLeaf ? null : root.left || root.right
    }
    if (p.right === root) {
      p.right = isLeaf ? null : root.left || root.right
    }
  }

  function traverse(root) {
    if (!root) return
    if (root.val === key) {
      // 当前节点的左右子节点都存在
      if (root.left && root.right) {
        // 寻找root.right中的最小值对应的节点minValNode
        let minValNode = root.right
        let _p = root
        while (minValNode && minValNode.left) {
          _p = minValNode
          minValNode = minValNode.left
        }
        // 交换root和minValNode的值
        root.val = minValNode.val
        // 删除minValNode
        delChild(minValNode, _p)
      } else {
        // 当前节点是叶子节点，或者只有一个子节点
        delChild(root, p)
      }
    } else if (root.val > key) {
      p = root
      traverse(root.left)
    } else {
      p = root
      traverse(root.right)
    }
  }

  traverse(root)
  return sentinel.left
}
// @lc code=end
