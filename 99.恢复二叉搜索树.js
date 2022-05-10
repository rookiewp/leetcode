/*
 * @lc app=leetcode.cn id=99 lang=javascript
 *
 * [99] 恢复二叉搜索树
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
// var recoverTree = function (root) {
//   let preNode = null
//   const errNodeList = []
//   function inorder(root) {
//     if (!root) {
//       return
//     }
//     inorder(root.left)
//     if (preNode && preNode.val >= root.val) {
//       errNodeList.push(preNode, root)
//     }
//     preNode = root
//     inorder(root.right)
//   }
//   inorder(root)
//   const node1 = errNodeList[0]
//   const node2 = errNodeList[errNodeList.length - 1]
//   const val = node1.val
//   node1.val = node2.val
//   node2.val = val
// }

// 使用morris遍历，实现空间复杂度为O(1)
var recoverTree = function (root) {
  let preNode = null
  const errNodeList = []
  function findErrorNodes(preNode, curNode) {
    if (preNode && preNode.val >= curNode.val) {
      errNodeList.push(preNode, curNode)
    }
  }

  function morris(root) {
    let cur = root
    let mostRight = null
    while (cur !== null) {
      mostRight = cur.left
      if (mostRight !== null) {
        while (mostRight.right !== null && mostRight.right !== cur) {
          mostRight = mostRight.right
        }
        if (mostRight.right === null) {
          mostRight.right = cur
          cur = cur.left
          continue
        } else if (mostRight.right === cur) {
          findErrorNodes(preNode, cur)
          preNode = cur
          mostRight.right = null
        }
      } else {
        findErrorNodes(preNode, cur)
        preNode = cur
      }
      cur = cur.right
    }
  }
  morris(root)
  const node1 = errNodeList[0]
  const node2 = errNodeList[errNodeList.length - 1]
  const val = node1.val
  node1.val = node2.val
  node2.val = val
}

// @lc code=end
