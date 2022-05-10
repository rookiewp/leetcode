/*
 * @lc app=leetcode.cn id=173 lang=javascript
 *
 * [173] 二叉搜索树迭代器
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

// 方法1：将BST转成数组，然后迭代数组，这种方法最容易想到
// 方法2：进阶：使用栈，这样next方法均摊时间复杂度为O(1)
// 方法3：进阶：morris遍历
/**
 * @param {TreeNode} root
 */
// var BSTIterator = function (root) {
//   this.cur = root
//   this.stack = []
// }

/**
 * @return {number}
 */
// BSTIterator.prototype.next = function () {
//   while (this.cur) {
//     this.stack.push(this.cur)
//     this.cur = this.cur.left
//   }
//   const node = this.stack.pop()
//   this.cur = node.right
//   return node.val
// }

/**
 * @return {boolean}
 */
// BSTIterator.prototype.hasNext = function () {
//   return this.stack.length > 0 || this.cur !== null
// }

/**
 * @param {TreeNode} root
 */
var BSTIterator = function (root) {
  this.cur = root
}

/**
 * @return {number}
 */
BSTIterator.prototype.next = function () {
  return this.morris(this.cur)
}

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function () {
  return this.cur !== null
}

BSTIterator.prototype.morris = function (node) {
  if (node === null) return null
  while (node) {
    let mostRight = node.left
    if (mostRight) {
      while (mostRight.right && mostRight.right !== node) {
        mostRight = mostRight.right
      }
      if (mostRight.right === null) {
        mostRight.right = node
        node = node.left
        continue
      } else {
        this.cur = node.right
        mostRight.right = null
        return node.val
      }
    } else {
      this.cur = node.right
      return node.val
    }
    // node = node.right
  }
}

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
// @lc code=end
