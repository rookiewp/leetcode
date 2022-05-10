/*
 * @lc app=leetcode.cn id=449 lang=javascript
 *
 * [449] 序列化和反序列化二叉搜索树
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
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
// var serialize = function (root) {
//   let str = ''
//   if (!root) return str
//   function preorder(root) {
//     if (!root) {
//       str += ',#'
//       return
//     }
//     str = str === '' ? str + root.val : str + ',' + root.val
//     preorder(root.left)
//     preorder(root.right)
//   }
//   preorder(root)
//   return str
// }

var serialize = function (root) {
  let str = ''
  if (!root) return str
  function postrder(root) {
    if (!root) {
      str += `${str === '' ? '#' : ',#'}`
      return
    }
    postrder(root.left)
    postrder(root.right)
    str += `,${root.val}`
  }
  postrder(root)
  return str
}

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
// var deserialize = function (data) {
//   if (!data) return null
//   const arr = data.split(',')
//   let i = 0
//   function inorder() {
//     const v = arr[i]
//     i++
//     if (v === '#') return null
//     const node = new TreeNode(v)
//     node.left = inorder()
//     node.right = inorder()
//     return node
//   }
//   return inorder()
// }

var deserialize = function (data) {
  if (!data) return null
  const arr = data.split(',')
  let i = arr.length - 1
  function inorder() {
    const v = arr[i]
    i--
    if (v === '#') return null
    const node = new TreeNode(v)
    node.right = inorder()
    node.left = inorder()
    return node
  }
  return inorder()
}

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
// @lc code=end
