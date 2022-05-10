/*
 * @lc app=leetcode.cn id=538 lang=javascript
 *
 * [538] 把二叉搜索树转换为累加树
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
 * @return {TreeNode}
 */
// 反序中序遍历
// var convertBST = function (root) {
//   let sum = 0
//   function inorder(root) {
//     if (!root) return
//     inorder(root.right)
//     sum += root.val
//     root.val = sum
//     inorder(root.left)
//   }
//   inorder(root)
//   return root
// }

// morris反序中序遍历
var convertBST = function (root) {
  let sum = 0
  function morris(root) {
    while (root) {
      let mostLeft = root.right
      if (mostLeft) {
        while (mostLeft.left && mostLeft.left !== root) {
          mostLeft = mostLeft.left
        }
        if (mostLeft.left === null) {
          mostLeft.left = root
          root = root.right
          continue
        } else {
          mostLeft.left = null
          sum += root.val
          root.val = sum
        }
      } else {
        sum += root.val
        root.val = sum
      }
      root = root.left
    }
  }
  morris(root)
  return root
}

// @lc code=end
