/*
 * @lc app=leetcode.cn id=222 lang=javascript
 *
 * [222] 完全二叉树的节点个数
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
 * @return {number}
 */
// 前中后或者层次遍历都可以计算节点个数，时间和空间复杂度都是O(n)
// 使用morris遍历，时间复杂度为O(n)空间复杂度为O(1)
// var countNodes = function (root) {
//   let count = 0
//   function morris(root) {
//     while (root) {
//       let mostRight = root.left
//       if (mostRight) {
//         while (mostRight.right && mostRight.right !== root) {
//           mostRight = mostRight.right
//         }
//         if (mostRight.right === null) {
//           count++
//           mostRight.right = root
//           root = root.left
//           continue
//         } else {
//           mostRight.right = null
//         }
//       } else {
//         count++
//       }
//       root = root.right
//     }
//   }
//   morris(root)
//   return count
// }

// 进阶
var countNodes = function (root) {
  if (!root) return 0
  function getHeight(root) {
    let h = 0
    while (root !== null) {
      h++
      root = root.left
    }
    return h
  }
  const leftHeight = getHeight(root.left)
  const rightHeight = getHeight(root.right)
  if (leftHeight === rightHeight) {
    // 左子树的高度 === 右子树高度，说明左子树为满二叉树，满二叉树节点个数 = Math.pow(2, leftHeight) - 1，这是整个数的节点数 = countNodes(root.right) + Math.pow(2, leftHeight) - 1 + 1(这个1是当前节点)
    return countNodes(root.right) + Math.pow(2, leftHeight)
  } else {
    // 左子树的高度 !== 右子树高度，说明右节点肯定是满二叉树，左子树可能是满二叉树
    return countNodes(root.left) + Math.pow(2, rightHeight)
  }
}
// @lc code=end
