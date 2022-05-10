/*
 * @lc app=leetcode.cn id=919 lang=javascript
 *
 * [919] 完全二叉树插入器
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
 */
var CBTInserter = function (root) {
  function levelorder(root) {
    const list = [null]
    if (!root) return list
    const queue = [root]
    while (queue.length > 0) {
      const cur = queue.shift()
      if (cur.left) queue.push(cur.left)
      if (cur.right) queue.push(cur.right)
      list.push(cur)
    }
    return list
  }
  this.list = levelorder(root)
}

/**
 * @param {number} val
 * @return {number}
 */
CBTInserter.prototype.insert = function (val) {
  const insertNode = new TreeNode(val)
  const parentIndex = Math.floor(this.list.length / 2)
  const parentNode = this.list[parentIndex]
  if (parentNode.left) {
    parentNode.right = insertNode
  } else {
    parentNode.left = insertNode
  }
  this.list.push(insertNode)
  return parentNode.val
}

/**
 * @return {TreeNode}
 */
CBTInserter.prototype.get_root = function () {
  return this.list[1]
}

/**
 * Your CBTInserter object will be instantiated and called as such:
 * var obj = new CBTInserter(root)
 * var param_1 = obj.insert(val)
 * var param_2 = obj.get_root()
 */
// @lc code=end
